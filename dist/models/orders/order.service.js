"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var OrdersService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const order_entity_1 = require("./entities/order.entity");
const typeorm_2 = require("typeorm");
const base_service_1 = require("../base/base.service");
const nestjs_1 = require("@automapper/nestjs");
const notifications_service_1 = require("../notifications/notifications.service");
const firebase_message_service_1 = require("../../providers/firebase/message/firebase-message.service");
const subscriptions_service_1 = require("../subscriptions/subscriptions.service");
const package_item_service_1 = require("../package-item/package-item.service");
const stations_service_1 = require("../stations/stations.service");
const kitchens_service_1 = require("../kitchens/kitchens.service");
const time_slots_service_1 = require("../time-slots/time-slots.service");
const order_enum_1 = require("../../common/enums/order.enum");
const sessions_service_1 = require("../sessions/sessions.service");
const batch_service_1 = require("../batchs/batch.service");
const setting_config_1 = require("../../common/types/setting_config");
const deliveryTrip_service_1 = require("../deliveryTrips/deliveryTrip.service");
let OrdersService = OrdersService_1 = class OrdersService extends base_service_1.BaseService {
    constructor(ordersRepository, mapper, subscriptionService, packageItemService, stationService, kitchenService, timeSlotService, dataSource, notificationsService, firebaseMessageService, batchService, tripService, sessionService) {
        super(ordersRepository);
        this.ordersRepository = ordersRepository;
        this.mapper = mapper;
        this.subscriptionService = subscriptionService;
        this.packageItemService = packageItemService;
        this.stationService = stationService;
        this.kitchenService = kitchenService;
        this.timeSlotService = timeSlotService;
        this.dataSource = dataSource;
        this.notificationsService = notificationsService;
        this.firebaseMessageService = firebaseMessageService;
        this.batchService = batchService;
        this.tripService = tripService;
        this.sessionService = sessionService;
        this.logger = new common_1.Logger(OrdersService_1.name);
    }
    async createOrders(dto) {
        const itemFind = await this.packageItemService.findOne({
            where: { id: dto.packageItemID },
        });
        if (!itemFind || itemFind == null)
            throw new common_1.HttpException('Package item not found', common_1.HttpStatus.NOT_FOUND);
        const slotFind = await this.timeSlotService.findOne({
            where: { id: dto.timeSlotID },
        });
        if (!slotFind || slotFind == null)
            throw new common_1.HttpException('Time slot not found', common_1.HttpStatus.NOT_FOUND);
        const stationFind = await this.stationService.findOne({
            where: { id: dto.stationID },
            relations: {
                kitchen: true,
            },
        });
        if (!stationFind || stationFind == null)
            throw new common_1.HttpException('Station not found', common_1.HttpStatus.NOT_FOUND);
        const subFind = await this.subscriptionService.findOne({
            where: { id: dto.subscriptionID },
        });
        if (!subFind || slotFind == null)
            throw new common_1.HttpException('Subscription not found', common_1.HttpStatus.NOT_FOUND);
        const kitchenFind = await this.kitchenService.findOne({
            where: { id: stationFind.kitchen.id },
        });
        if (!kitchenFind || kitchenFind == null)
            throw new common_1.HttpException('Kitchen not found', common_1.HttpStatus.NOT_FOUND);
        let sessionFind = await this.sessionService.findOne({
            where: {
                kitchen: { id: stationFind.kitchen.id },
                timeSlot: { id: slotFind.id },
                workDate: itemFind.deliveryDate,
            },
        });
        if (!sessionFind || sessionFind == null) {
            sessionFind = await this.sessionService.save({
                workDate: itemFind.deliveryDate,
                kitchen: kitchenFind,
                timeSlot: slotFind,
            });
            if (!sessionFind || sessionFind == null)
                throw new common_1.HttpException('Can not create session', common_1.HttpStatus.BAD_REQUEST);
        }
        const listBatch = await this.batchService.getBatchBySessionStation(sessionFind.id, stationFind.id);
        let batchFind;
        if (!listBatch || listBatch.length == 0) {
            batchFind = await this.batchService.save({
                session: sessionFind,
                station: stationFind,
            });
        }
        else {
            if (listBatch[0].orders.length < setting_config_1.SettingConfig.MAX_ORDER) {
                batchFind = listBatch[0];
            }
            else if (listBatch[0].orders.length >= setting_config_1.SettingConfig.MAX_ORDER) {
                batchFind = await this.batchService.save({
                    session: sessionFind,
                    station: stationFind,
                });
            }
        }
        const newOrder = await this.ordersRepository.save({
            subscription: subFind,
            session: sessionFind,
            packageItem: itemFind,
            kitchen: kitchenFind,
            timeSlot: slotFind,
            station: stationFind,
            batch: batchFind,
        });
        if (!newOrder || newOrder == null)
            throw new common_1.HttpException('Create order fail', common_1.HttpStatus.BAD_REQUEST);
        return 'newOrder';
    }
    async deleteSubOrder(orders) {
        for (let i = 0; i < orders.length; i++) {
            const del = await this.ordersRepository
                .createQueryBuilder()
                .delete()
                .from(order_entity_1.OrderEntity)
                .where('id = :id', { id: orders[i].id })
                .execute();
            if (!del) {
                return false;
            }
        }
        return true;
    }
    async getOrderBySession(filter) {
        const { status } = filter;
        const sessionFind = await this.sessionService.findOne({
            where: { id: filter.sessionId },
        });
        if (!sessionFind || sessionFind == null)
            throw new common_1.HttpException('session not found', common_1.HttpStatus.NOT_FOUND);
        const listOrder = await this.ordersRepository.find({
            where: {
                session: { id: sessionFind.id },
                status: status,
            },
            relations: {
                subscription: { account: { profile: true }, packages: true },
                packageItem: { foodGroup: { foods: true } },
                session: { timeSlot: true },
                station: true,
            },
        });
        if (!listOrder || listOrder.length == 0)
            throw new common_1.HttpException('no orders found', common_1.HttpStatus.NOT_FOUND);
        return listOrder;
    }
    async confirmSubOrder(orders) {
        for (let i = 0; i < orders.length; i++) {
            const confirm = await this.ordersRepository.update({ id: orders[i].id }, { status: order_enum_1.OrderEnum.PROGRESS });
            if (!confirm) {
                throw new common_1.HttpException(`Order ${orders[i].id} can not confirm`, common_1.HttpStatus.BAD_REQUEST);
            }
        }
        return true;
    }
    async getOrderDetail(id) {
        const order = await this.ordersRepository
            .createQueryBuilder('orders')
            .select('orders.id, orders.nameFood, orders.createdAt as orderDate,  time_slots.startTime, time_slots.endTime, stations.name as station, accounts.phone, profiles.fullName, orders.deliveryDate')
            .leftJoin('orders.subscription', 'subscriptions')
            .leftJoin('subscriptions.customer', 'customers')
            .leftJoin('customers.account', 'accounts')
            .leftJoin('accounts.profile', 'profiles')
            .leftJoin('orders.timeSlot', 'time_slots')
            .leftJoin('orders.station', 'stations')
            .where('orders.id = :id', { id: id })
            .getRawOne();
        if (!order) {
            throw new common_1.HttpException('Can not get order detail', common_1.HttpStatus.NOT_FOUND);
        }
        return order;
    }
    async findById(id) {
        const order = await this.findOne({
            where: { id: id },
            relations: {
                subscription: { account: { profile: true } },
                station: true,
                packageItem: true,
            },
        });
        if (!order)
            throw new common_1.HttpException('Order not found', common_1.HttpStatus.NOT_FOUND);
        return order;
    }
    async getOrderByKitchen(find) {
        const listOrder = await this.ordersRepository.find({
            where: {
                station: { id: find.stationId },
                status: order_enum_1.OrderEnum.PROGRESS,
            },
            relations: {
                station: true,
                subscription: { account: { profile: true } },
            },
        });
        if (!listOrder || listOrder.length == 0) {
            throw new common_1.HttpException('No order found', common_1.HttpStatus.NOT_FOUND);
        }
        else {
            return listOrder;
        }
    }
    async getOrderByStatus(orderFilter) {
        const { status } = orderFilter;
        return await this.ordersRepository.find({
            where: { status: (0, typeorm_2.Like)(Boolean(status) ? status : '%%') },
            relations: {
                subscription: { account: { profile: true } },
                station: true,
                packageItem: true,
            },
        });
    }
    async getOrderByStatusDate(deliveryDate, orderFilter) {
        const { status } = orderFilter;
        return await this.ordersRepository.find({
            where: {
                status: (0, typeorm_2.Like)(Boolean(status) ? status : '%%'),
            },
            relations: {
                subscription: { account: { profile: true } },
                station: true,
                packageItem: true,
            },
        });
    }
};
OrdersService = OrdersService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_entity_1.OrderEntity)),
    __param(1, (0, nestjs_1.InjectMapper)()),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => subscriptions_service_1.SubscriptionService))),
    __param(11, (0, common_1.Inject)((0, common_1.forwardRef)(() => deliveryTrip_service_1.DeliveryTripService))),
    __metadata("design:paramtypes", [typeorm_2.Repository, Object, subscriptions_service_1.SubscriptionService,
        package_item_service_1.PackageItemService,
        stations_service_1.StationsService,
        kitchens_service_1.KitchenService,
        time_slots_service_1.TimeSlotsService,
        typeorm_2.DataSource,
        notifications_service_1.NotificationsService,
        firebase_message_service_1.FirebaseMessageService,
        batch_service_1.BatchService,
        deliveryTrip_service_1.DeliveryTripService,
        sessions_service_1.SessionService])
], OrdersService);
exports.OrdersService = OrdersService;
//# sourceMappingURL=order.service.js.map