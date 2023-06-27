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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryTripService = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const base_service_1 = require("../base/base.service");
const deliveryTrip_entity_1 = require("./entities/deliveryTrip.entity");
const shippers_service_1 = require("../shippers/shippers.service");
const order_service_1 = require("../orders/order.service");
const stations_service_1 = require("../stations/stations.service");
const kitchens_service_1 = require("../kitchens/kitchens.service");
const deliveryTrip_enum_1 = require("../../common/enums/deliveryTrip.enum");
const order_enum_1 = require("../../common/enums/order.enum");
const time_slots_service_1 = require("../time-slots/time-slots.service");
const notifications_service_1 = require("../notifications/notifications.service");
const sessions_service_1 = require("../sessions/sessions.service");
const setting_config_1 = require("../../common/types/setting_config");
const batch_service_1 = require("../batchs/batch.service");
const decorators_1 = require("@nestjs/common/decorators");
const utils_1 = require("@nestjs/common/utils");
const axios_1 = require("axios");
const session_enum_1 = require("../../common/enums/session.enum");
const batch_enum_1 = require("../../common/enums/batch.enum");
let DeliveryTripService = class DeliveryTripService extends base_service_1.BaseService {
    constructor(dataSource, deliveryTripRepository, shipperService, orderService, kitchenService, timeSlotService, stationService, notificationsService, sessionService, batchService) {
        super(deliveryTripRepository);
        this.dataSource = dataSource;
        this.deliveryTripRepository = deliveryTripRepository;
        this.shipperService = shipperService;
        this.orderService = orderService;
        this.kitchenService = kitchenService;
        this.timeSlotService = timeSlotService;
        this.stationService = stationService;
        this.notificationsService = notificationsService;
        this.sessionService = sessionService;
        this.batchService = batchService;
    }
    async getAllDeliveryTrip(filter) {
        const { status } = filter;
        return await this.deliveryTripRepository.find({
            where: { status: (0, typeorm_1.Like)(Boolean(status) ? status : '%%') },
            relations: {
                shipper: { account: { profile: true } },
            },
        });
    }
    async getDeliveryTripBySession(filter) {
        const { status } = filter;
        const sessionFind = await this.sessionService.findOne({
            where: { id: filter.sessionId },
        });
        if (!sessionFind || sessionFind == null) {
            throw new common_1.HttpException(`session ${filter.sessionId} not found`, common_1.HttpStatus.NOT_FOUND);
        }
        const listTrip = await this.deliveryTripRepository.find({
            where: {
                session: { id: filter.sessionId },
                status: status,
            },
            relations: {
                batchs: {
                    orders: {
                        subscription: { packages: true, account: { profile: true } },
                        packageItem: { foodGroup: { foods: true } },
                    },
                    station: true,
                },
                shipper: { account: { profile: true } },
                session: { timeSlot: true },
            },
        });
        if (!listTrip || listTrip.length == 0) {
            throw new common_1.HttpException('No trip found', common_1.HttpStatus.NOT_FOUND);
        }
        return listTrip;
    }
    async getDeliveryTripByStatus(user, filter) {
        const { status } = filter;
        return await this.deliveryTripRepository.find({
            where: {
                shipper: { id: user.id },
                status: (0, typeorm_1.Like)(Boolean(status) ? status : '%%'),
            },
            relations: {
                batchs: { orders: true, station: true },
                session: { timeSlot: true, kitchen: { account: { profile: true } } },
            },
        });
    }
    async getDeliveryTripByDeliveryDate(user, filter) {
        return await this.deliveryTripRepository.find({
            where: {
                shipper: { id: user.id },
                deliveryDate: filter.deliveryDate,
            },
            relations: {
                batchs: { orders: true, station: true },
                session: { timeSlot: true, kitchen: { account: { profile: true } } },
            },
        });
    }
    async getDeliveryTripByShipper(user) {
        return await this.deliveryTripRepository.find({
            where: {
                shipper: { id: user.id },
            },
            relations: {
                batchs: { orders: true, station: true },
                session: { timeSlot: true, kitchen: { account: { profile: true } } },
            },
        });
    }
    async listTripBySession(sessionId) {
        return await this.deliveryTripRepository.find({
            where: { session: { id: sessionId } },
            relations: { batchs: { station: true } },
        });
    }
    async createTrip(dto) {
        const sessionFind = await this.sessionService.findOne({
            where: { id: dto.sessionId },
            relations: { batchs: { station: true } },
        });
        const newSet = new Set(sessionFind.batchs.map((i) => i.station.id));
        const newMap = new Map();
        newSet.forEach((e) => {
            const listBatch = [];
            newMap.set(e, listBatch);
        });
        for (const item of sessionFind.batchs) {
            if (newMap.has(item.station.id)) {
                newMap.get(item.station.id).push(item);
            }
        }
        const arrPromiseTrip = [];
        const listOneBatch = [];
        for (const value of newMap.values()) {
            for (let i = 0; i < value.length; i++) {
                if (i % setting_config_1.SettingConfig.MAX_BATCH == 0) {
                    const arrSub = value.slice(i, i + 2);
                    if (arrSub.length == setting_config_1.SettingConfig.MAX_BATCH) {
                        const trip = await this.deliveryTripRepository.save({
                            session: sessionFind,
                            deliveryDate: sessionFind.workDate,
                        });
                        arrSub.map((j) => {
                            arrPromiseTrip.push(this.batchService.save({
                                id: j.id,
                                deliveryTrip: trip,
                            }));
                        });
                        await Promise.all(arrPromiseTrip);
                    }
                    else {
                        listOneBatch.push(arrSub[0]);
                    }
                }
            }
        }
        const arrPromiseSingleBatch = [];
        let newTrip;
        for (let z = 0; z < listOneBatch.length; z++) {
            if (listOneBatch.length < setting_config_1.SettingConfig.MAX_BATCH) {
                newTrip = await this.deliveryTripRepository.save({
                    session: sessionFind,
                    deliveryDate: sessionFind.workDate,
                });
                await this.batchService.save({
                    id: listOneBatch[0].id,
                    deliveryTrip: newTrip,
                });
                break;
            }
            else {
                const firstBatch = listOneBatch[0];
                const origin = `${firstBatch.station.coordinate['coordinates'][0]},${firstBatch.station.coordinate['coordinates'][1]}`;
                const destinations = listOneBatch
                    .filter((i) => i.id != firstBatch.id)
                    .map((h) => {
                    const subDestination = `${h.station.coordinate['coordinates'][0]},${h.station.coordinate['coordinates'][1]}`;
                    return subDestination;
                })
                    .join('%7C');
                const listDistance = await axios_1.default.get(`https://rsapi.goong.io/DistanceMatrix?origins=${origin}&destinations=${destinations}&vehicle=bike&api_key=DuKETIrSZD6KjGweBEgitOzSOBEsGWWjys2ea1jW`);
                const arrResultDistance = listDistance.data.rows[0].elements;
                let subSingleBatch = [];
                for (let e = 0; e < arrResultDistance.length; e++) {
                    if (arrResultDistance[e].distance.value < setting_config_1.SettingConfig.MAX_DISTANCE) {
                        subSingleBatch = [firstBatch, listOneBatch[e + 1]];
                        newTrip = await this.deliveryTripRepository.save({
                            session: sessionFind,
                            deliveryDate: sessionFind.workDate,
                        });
                        subSingleBatch.map((s) => {
                            arrPromiseSingleBatch.push(this.batchService.save({
                                id: s.id,
                                deliveryTrip: newTrip,
                            }));
                        });
                        listOneBatch.splice(0, 1);
                        listOneBatch.splice(e, 1);
                        await Promise.all(arrPromiseSingleBatch);
                        if (listOneBatch.length == 1) {
                            newTrip = await this.deliveryTripRepository.save({
                                session: sessionFind,
                                deliveryDate: sessionFind.workDate,
                            });
                            await this.batchService.save({
                                id: listOneBatch[0].id,
                                deliveryTrip: newTrip,
                            });
                        }
                        break;
                    }
                    if (e == arrResultDistance.length - 1) {
                        newTrip = await this.deliveryTripRepository.save({
                            session: sessionFind,
                            deliveryDate: sessionFind.workDate,
                        });
                        await this.batchService.save({
                            id: firstBatch.id,
                            deliveryTrip: newTrip,
                        });
                        listOneBatch.splice(0, 1);
                        if (listOneBatch.length == 1) {
                            newTrip = await this.deliveryTripRepository.save({
                                session: sessionFind,
                                deliveryDate: sessionFind.workDate,
                            });
                            await this.batchService.save({
                                id: listOneBatch[0].id,
                                deliveryTrip: newTrip,
                            });
                        }
                    }
                }
            }
        }
        await this.sessionService.save({
            id: sessionFind.id,
            status: session_enum_1.SessionEnum.UNASSIGNED,
        });
        return await this.deliveryTripRepository.find({
            where: { session: { id: dto.sessionId } },
            relations: { batchs: { station: true } },
        });
    }
    async assignShipperToTrip(dto) {
        const sessionFind = await this.sessionService.findOne({
            where: { id: dto.sessionId },
            relations: { kitchen: true, deliveryTrips: { batchs: { orders: true } } },
        });
        const listTrip = await this.deliveryTripRepository.find({
            where: { session: { id: dto.sessionId } },
        });
        if (dto.shipperIds.length != listTrip.length) {
            throw new common_1.HttpException('shipper not enough', common_1.HttpStatus.BAD_REQUEST);
        }
        else {
            for (let i = 0; i < dto.shipperIds.length; i++) {
                const shipperFind = await this.shipperService.findOne({
                    where: { id: dto.shipperIds[i] },
                    relations: { kitchen: true, account: { profile: true } },
                });
                if (shipperFind.kitchen == null ||
                    sessionFind.kitchen.id != shipperFind.kitchen.id) {
                    throw new common_1.HttpException(`shipper ${shipperFind.account.profile.fullName} is not in your kitchen `, common_1.HttpStatus.BAD_REQUEST);
                }
                else {
                    await this.deliveryTripRepository.save({
                        id: listTrip[i].id,
                        shipper: shipperFind,
                    });
                }
            }
        }
        const updateSession = await this.sessionService.save({
            id: sessionFind.id,
            status: session_enum_1.SessionEnum.PROCESSING,
        });
        const arrUpdateOrderPromise = [];
        if (!updateSession) {
            throw new common_1.HttpException('can not update session', common_1.HttpStatus.BAD_REQUEST);
        }
        else {
            sessionFind.deliveryTrips.map((t) => {
                t.batchs.map((b) => {
                    b.orders.map((o) => {
                        arrUpdateOrderPromise.push(this.orderService.save({
                            id: o.id,
                            status: order_enum_1.OrderEnum.PROGRESS,
                        }));
                    });
                });
            });
            await Promise.all(arrUpdateOrderPromise);
        }
        return await this.deliveryTripRepository.find({
            where: { session: { id: dto.sessionId } },
            relations: { batchs: { orders: true } },
        });
    }
    async getTripById(tripId) {
        const trip = await this.deliveryTripRepository.findOne({
            where: { id: tripId },
            relations: {
                session: { timeSlot: true },
                batchs: {
                    orders: { subscription: { account: { profile: true } } },
                    station: true,
                },
            },
        });
        if (!trip) {
            throw new common_1.HttpException('No trip found', common_1.HttpStatus.NOT_FOUND);
        }
        else {
            return trip;
        }
    }
    async updateStatusTrip(orderIds) {
        const trip = await this.deliveryTripRepository.findOne({
            where: { id: orderIds.deliveryTripId },
            relations: { batchs: { orders: true } },
        });
        const arrUpdateBatchPromise = [];
        const arrUpdateOrderPromise = [];
        if (trip.status == deliveryTrip_enum_1.DeliveryTripEnum.READY) {
            const updateTrip = await this.deliveryTripRepository.update({ id: orderIds.deliveryTripId }, {
                status: deliveryTrip_enum_1.DeliveryTripEnum.DELIVERY,
                deliveryTime: orderIds.updateTime,
            });
            if (updateTrip) {
                trip.batchs.map((b) => {
                    arrUpdateBatchPromise.push(this.batchService.save({
                        id: b.id,
                        status: batch_enum_1.BatchEnum.DELIVERY,
                    }));
                    b.orders.map((o) => {
                        arrUpdateOrderPromise.push(this.orderService.save({
                            id: o.id,
                            status: order_enum_1.OrderEnum.DELIVERY,
                        }));
                    });
                    Promise.all(arrUpdateOrderPromise);
                });
                await Promise.all(arrUpdateBatchPromise);
            }
        }
        else if (trip.status == deliveryTrip_enum_1.DeliveryTripEnum.DELIVERY) {
            const updateTrip = await this.deliveryTripRepository.update({ id: orderIds.deliveryTripId }, { status: deliveryTrip_enum_1.DeliveryTripEnum.ARRIVED, arrivedTime: orderIds.updateTime });
            if (updateTrip) {
                trip.batchs.map((b) => {
                    arrUpdateBatchPromise.push(this.batchService.save({
                        id: b.id,
                        status: batch_enum_1.BatchEnum.ARRIVED,
                    }));
                    b.orders.map((o) => {
                        arrUpdateOrderPromise.push(this.orderService.save({
                            id: o.id,
                            status: order_enum_1.OrderEnum.ARRIVED,
                        }));
                    });
                    Promise.all(arrUpdateOrderPromise);
                });
                await Promise.all(arrUpdateBatchPromise);
            }
        }
        const freshTrip = await this.deliveryTripRepository.findOne({
            where: { id: orderIds.deliveryTripId },
            relations: { batchs: { orders: true } },
        });
        return freshTrip;
    }
    async rejectByShipper(id, user) {
        const trip = await this.deliveryTripRepository.findOne({
            where: { id: id, shipper: { id: user.id } },
        });
        if (!trip) {
            throw new common_1.HttpException('Trip not found', common_1.HttpStatus.NOT_FOUND);
        }
        const reject = await this.deliveryTripRepository.update({
            id: id,
            shipper: { id: user.id },
            status: deliveryTrip_enum_1.DeliveryTripEnum.WAITING,
        }, {
            status: deliveryTrip_enum_1.DeliveryTripEnum.REJECT,
        });
        if (reject) {
            return 'Reject success';
        }
        else {
            return 'Fail to reject';
        }
    }
    async directShipperByManager(transfer) {
        const trip = await this.deliveryTripRepository.findOne({
            where: { id: transfer.deliveryTripId, status: deliveryTrip_enum_1.DeliveryTripEnum.REJECT },
            relations: { shipper: true },
        });
        if (!trip) {
            throw new common_1.HttpException('Trip not found', common_1.HttpStatus.NOT_FOUND);
        }
        if (trip.shipper.id == transfer.shipperId) {
            throw new common_1.HttpException('Unable to transfer to old shipper', common_1.HttpStatus.BAD_REQUEST);
        }
        else {
            const directShipper = await this.deliveryTripRepository.update({
                id: transfer.deliveryTripId,
                status: deliveryTrip_enum_1.DeliveryTripEnum.REJECT,
            }, {
                shipper: { id: transfer.shipperId },
                status: deliveryTrip_enum_1.DeliveryTripEnum.WAITING,
            });
            if (directShipper) {
                return 'Transfer success';
            }
            else {
                return 'Transfer fail';
            }
        }
    }
};
DeliveryTripService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_2.InjectRepository)(deliveryTrip_entity_1.DeliveryTripEntity)),
    __param(3, (0, decorators_1.Inject)((0, utils_1.forwardRef)(() => order_service_1.OrdersService))),
    __param(8, (0, decorators_1.Inject)((0, utils_1.forwardRef)(() => sessions_service_1.SessionService))),
    __metadata("design:paramtypes", [typeorm_1.DataSource,
        typeorm_1.Repository,
        shippers_service_1.ShippersService,
        order_service_1.OrdersService,
        kitchens_service_1.KitchenService,
        time_slots_service_1.TimeSlotsService,
        stations_service_1.StationsService,
        notifications_service_1.NotificationsService,
        sessions_service_1.SessionService,
        batch_service_1.BatchService])
], DeliveryTripService);
exports.DeliveryTripService = DeliveryTripService;
//# sourceMappingURL=deliveryTrip.service.js.map