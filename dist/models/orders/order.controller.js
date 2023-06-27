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
exports.OrdersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const order_entity_1 = require("./entities/order.entity");
const order_service_1 = require("./order.service");
const order_filter_dto_1 = require("./dto/order-filter.dto");
const roles_decorator_1 = require("../../decorators/roles.decorator");
const role_enum_1 = require("../../common/enums/role.enum");
const create_order_dto_1 = require("./dto/create-order.dto");
let OrdersController = class OrdersController {
    constructor(ordersService) {
        this.ordersService = ordersService;
    }
    async orderSub(dto) {
        return await this.ordersService.createOrders(dto);
    }
    async getOrderBySession(filter) {
        return await this.ordersService.getOrderBySession(filter);
    }
    async getOrderByStatus(orderFilter) {
        const list = await this.ordersService.getOrderByStatus(orderFilter);
        if (!list || list.length == 0) {
            throw new common_1.HttpException('No order found', common_1.HttpStatus.NOT_FOUND);
        }
        else {
            return list;
        }
    }
    async getOrderByKitchen(data, orderFilter) {
        const list = await this.ordersService.getOrderByStatusDate(data, orderFilter);
        if (!list || list.length == 0) {
            throw new common_1.HttpException('No order found', common_1.HttpStatus.NOT_FOUND);
        }
        else {
            return list;
        }
    }
    async getOrderToTrip(find) {
        return await this.ordersService.getOrderByKitchen(find);
    }
    async getOrderById(id) {
        return await this.ordersService.findById(id);
    }
    async getOrderDetail(id) {
        return await this.ordersService.getOrderDetail(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({
        description: 'CUSTOMER CREATE ORDER',
        status: 200,
        type: order_entity_1.OrderEntity,
    }),
    (0, roles_decorator_1.Roles)(role_enum_1.RoleEnum.CUSTOMER),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_order_dto_1.OrderCreationDTO]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "orderSub", null);
__decorate([
    (0, common_1.Get)('/bySession'),
    (0, swagger_1.ApiResponse)({
        description: 'GET ORDER BY SESSION',
        status: 200,
        type: [order_entity_1.OrderEntity],
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_filter_dto_1.SessionFilterOrder]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "getOrderBySession", null);
__decorate([
    (0, common_1.Get)('/byStatus'),
    (0, swagger_1.ApiResponse)({
        description: 'GET ORDER BY STATUS',
        status: 200,
        type: order_entity_1.OrderEntity,
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_filter_dto_1.OrderFilterDTO]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "getOrderByStatus", null);
__decorate([
    (0, common_1.Get)('/order-date'),
    (0, swagger_1.ApiResponse)({
        description: 'GET ORDER BY STATUS AND DATE',
        status: 200,
        type: order_entity_1.OrderEntity,
    }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_filter_dto_1.OrderSearchByDate,
        order_filter_dto_1.OrderFilterDTO]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "getOrderByKitchen", null);
__decorate([
    (0, common_1.Get)('/byKitchen'),
    (0, swagger_1.ApiResponse)({
        description: 'KITCHEN GET ORDER BY STATUS, DATE, STATION',
        status: 200,
        type: order_entity_1.OrderEntity,
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_filter_dto_1.OrderGetByKitchen]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "getOrderToTrip", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "getOrderById", null);
__decorate([
    (0, common_1.Get)('/detail/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "getOrderDetail", null);
OrdersController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('orders'),
    (0, swagger_1.ApiTags)('orders'),
    __metadata("design:paramtypes", [order_service_1.OrdersService])
], OrdersController);
exports.OrdersController = OrdersController;
//# sourceMappingURL=order.controller.js.map