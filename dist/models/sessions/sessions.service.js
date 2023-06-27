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
exports.SessionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const base_service_1 = require("../base/base.service");
const kitchens_service_1 = require("../kitchens/kitchens.service");
const time_slots_service_1 = require("../time-slots/time-slots.service");
const sessions_entity_1 = require("./entities/sessions.entity");
const moment = require("moment");
const session_enum_1 = require("../../common/enums/session.enum");
const deliveryTrip_service_1 = require("../deliveryTrips/deliveryTrip.service");
const deliveryTrip_enum_1 = require("../../common/enums/deliveryTrip.enum");
const decorators_1 = require("@nestjs/common/decorators");
const utils_1 = require("@nestjs/common/utils");
const order_service_1 = require("../orders/order.service");
const batch_service_1 = require("../batchs/batch.service");
const batch_enum_1 = require("../../common/enums/batch.enum");
const order_enum_1 = require("../../common/enums/order.enum");
let SessionService = class SessionService extends base_service_1.BaseService {
    constructor(sessionRepository, kitchenService, timeSlotService, tripService, orderService, batchService) {
        super(sessionRepository);
        this.sessionRepository = sessionRepository;
        this.kitchenService = kitchenService;
        this.timeSlotService = timeSlotService;
        this.tripService = tripService;
        this.orderService = orderService;
        this.batchService = batchService;
    }
    async createSession(dto) {
        const kitchenFind = await this.kitchenService.findOne({
            where: { id: dto.kitchenId },
        });
        if (!kitchenFind || kitchenFind == null)
            throw new common_1.HttpException('Kitchen not found', common_1.HttpStatus.NOT_FOUND);
        const timeSlotFind = await this.timeSlotService.findOne({
            where: { id: dto.timeSlotId },
        });
        if (!timeSlotFind || timeSlotFind == null)
            throw new common_1.HttpException('Time slot not found', common_1.HttpStatus.NOT_FOUND);
        const newSession = await this.sessionRepository.save({
            workDate: dto.workDate,
            kitchen: kitchenFind,
            timeSlot: timeSlotFind,
        });
        if (!newSession)
            throw new common_1.HttpException('create session fail', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        return await this.sessionRepository.findOne({
            where: { id: newSession.id },
            relations: { timeSlot: true, kitchen: true },
        });
    }
    async getAllSessionByKitchen(user, filter) {
        const kitchenFind = await this.kitchenService.findOne({
            where: { id: user.id },
        });
        if (!kitchenFind || kitchenFind == null)
            throw new common_1.HttpException('Kitchen not found', common_1.HttpStatus.NOT_FOUND);
        const listSession = await this.sessionRepository.find({
            where: { kitchen: { id: kitchenFind.id }, workDate: filter.workDate },
            relations: { timeSlot: true, batchs: { orders: true } },
            order: {
                timeSlot: {
                    startTime: 'ASC',
                },
            },
        });
        if (listSession.length == 0 || !listSession)
            throw new common_1.HttpException('No session found', common_1.HttpStatus.NOT_FOUND);
        return listSession;
    }
    async getSessionDetail(id) {
        const sessionDetail = await this.sessionRepository.findOne({
            where: { id: id },
            relations: {
                timeSlot: true,
                batchs: {
                    station: true,
                    orders: {
                        station: true,
                        packageItem: { foodGroup: { foods: true } },
                        subscription: { account: { profile: true }, packages: true },
                    },
                },
            },
        });
        if (!sessionDetail || sessionDetail == null)
            throw new common_1.HttpException('No session found', common_1.HttpStatus.NOT_FOUND);
        return sessionDetail;
    }
    async doneSession(sessionId) {
        const date = moment().format('YYYY-MM-DD');
        const sessionFind = await this.sessionRepository.findOne({
            where: { id: sessionId },
            relations: {
                kitchen: true,
                deliveryTrips: { batchs: { orders: true } },
            },
        });
        if (sessionFind == null || !sessionFind) {
            throw new common_1.HttpException(`session ${sessionId} not found`, common_1.HttpStatus.NOT_FOUND);
        }
        const arrUpdateTripPromise = [];
        const arrUpdateBatchPromise = [];
        const arrUpdateOrderPromise = [];
        const updateSession = await this.sessionRepository.save({
            id: sessionFind.id,
            status: session_enum_1.SessionEnum.DONE,
        });
        if (!updateSession) {
            throw new common_1.HttpException('can not done session', common_1.HttpStatus.BAD_REQUEST);
        }
        sessionFind.deliveryTrips.map((i) => {
            arrUpdateTripPromise.push(this.tripService.save({
                id: i.id,
                status: deliveryTrip_enum_1.DeliveryTripEnum.READY,
            }));
            i.batchs.map((b) => {
                arrUpdateBatchPromise.push(this.batchService.save({
                    id: b.id,
                    status: batch_enum_1.BatchEnum.READY,
                }));
                b.orders.map((o) => {
                    arrUpdateOrderPromise.push(this.orderService.save({
                        id: o.id,
                        status: order_enum_1.OrderEnum.READY,
                    }));
                });
                Promise.all(arrUpdateOrderPromise);
            });
            Promise.all(arrUpdateBatchPromise);
        });
        await Promise.all(arrUpdateTripPromise);
        return await this.sessionRepository.findOne({
            where: { id: sessionFind.id },
            relations: { deliveryTrips: { batchs: { orders: true } } },
        });
    }
};
SessionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sessions_entity_1.SessionEntity)),
    __param(3, (0, decorators_1.Inject)((0, utils_1.forwardRef)(() => deliveryTrip_service_1.DeliveryTripService))),
    __param(4, (0, decorators_1.Inject)((0, utils_1.forwardRef)(() => order_service_1.OrdersService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        kitchens_service_1.KitchenService,
        time_slots_service_1.TimeSlotsService,
        deliveryTrip_service_1.DeliveryTripService,
        order_service_1.OrdersService,
        batch_service_1.BatchService])
], SessionService);
exports.SessionService = SessionService;
//# sourceMappingURL=sessions.service.js.map