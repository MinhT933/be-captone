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
exports.BatchService = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
const utils_1 = require("@nestjs/common/utils");
const typeorm_1 = require("@nestjs/typeorm");
const batch_enum_1 = require("../../common/enums/batch.enum");
const order_enum_1 = require("../../common/enums/order.enum");
const typeorm_2 = require("typeorm");
const base_service_1 = require("../base/base.service");
const order_service_1 = require("../orders/order.service");
const batch_entity_1 = require("./entities/batch.entity");
let BatchService = class BatchService extends base_service_1.BaseService {
    constructor(batchRepository, orderService) {
        super(batchRepository);
        this.batchRepository = batchRepository;
        this.orderService = orderService;
    }
    async getBatchBySessionStation(sessionId, stationId) {
        return await this.batchRepository.find({
            where: { session: { id: sessionId }, station: { id: stationId } },
            relations: { station: true, orders: true },
            order: { createdAt: 'DESC' },
        });
    }
    async getBatchById(id) {
        const batch = await this.batchRepository.findOne({
            where: { id: id },
            relations: {
                station: true,
                orders: {
                    packageItem: { foodGroup: { foods: true } },
                    subscription: { account: { profile: true } },
                },
            },
        });
        if (!batch || batch == null)
            throw new common_1.HttpException(`Batch id ${id} not found`, common_1.HttpStatus.NOT_FOUND);
        return batch;
    }
    async updateStatusBatch(id) {
        let status_update;
        const arrUpdateOrderPromise = [];
        const batchFind = await this.batchRepository.findOne({
            where: { id: id },
            relations: { orders: true },
        });
        if (!batchFind || batchFind == null)
            throw new common_1.HttpException('Batch not found', common_1.HttpStatus.BAD_REQUEST);
        if (batchFind.status == batch_enum_1.BatchEnum.READY) {
            await this.batchRepository.save({ id: id, status: batch_enum_1.BatchEnum.DELIVERY });
            batchFind.orders.map((o) => {
                arrUpdateOrderPromise.push(this.orderService.save({ id: o.id, status: order_enum_1.OrderEnum.DELIVERY }));
            });
            await Promise.all(arrUpdateOrderPromise);
            status_update = batch_enum_1.BatchEnum.DELIVERY;
        }
        else if (batchFind.status == batch_enum_1.BatchEnum.DELIVERY) {
            await this.batchRepository.save({ id: id, status: batch_enum_1.BatchEnum.ARRIVED });
            batchFind.orders.map((o) => {
                arrUpdateOrderPromise.push(this.orderService.save({ id: o.id, status: order_enum_1.OrderEnum.ARRIVED }));
            });
            await Promise.all(arrUpdateOrderPromise);
            status_update = batch_enum_1.BatchEnum.ARRIVED;
        }
        else if (batchFind.status == batch_enum_1.BatchEnum.WAITING ||
            batchFind.status == batch_enum_1.BatchEnum.ARRIVED) {
            status_update = 'can not update';
        }
        return status_update;
    }
};
BatchService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(batch_entity_1.BatchEntity)),
    __param(1, (0, decorators_1.Inject)((0, utils_1.forwardRef)(() => order_service_1.OrdersService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        order_service_1.OrdersService])
], BatchService);
exports.BatchService = BatchService;
//# sourceMappingURL=batch.service.js.map