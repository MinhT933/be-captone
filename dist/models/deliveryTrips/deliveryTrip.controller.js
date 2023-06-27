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
exports.DeliveryTripController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const role_enum_1 = require("../../common/enums/role.enum");
const public_decorator_1 = require("../../decorators/public.decorator");
const roles_decorator_1 = require("../../decorators/roles.decorator");
const user_decorator_1 = require("../../decorators/user.decorator");
const account_entity_1 = require("../accounts/entities/account.entity");
const deliveryTrip_service_1 = require("./deliveryTrip.service");
const createDeliveryTrip_dto_1 = require("./dto/createDeliveryTrip.dto");
const deliveryTrip_filter_dto_1 = require("./dto/deliveryTrip-filter.dto");
const deliveryTrip_dto_1 = require("./dto/deliveryTrip.dto");
const updateStatusTrip_dto_1 = require("./dto/updateStatusTrip.dto");
const deliveryTrip_entity_1 = require("./entities/deliveryTrip.entity");
let DeliveryTripController = class DeliveryTripController {
    constructor(deliveryTripService) {
        this.deliveryTripService = deliveryTripService;
    }
    async getAll(filter) {
        const listTrip = await this.deliveryTripService.getAllDeliveryTrip(filter);
        if (!listTrip || listTrip.length == 0) {
            throw new common_1.HttpException('No data delivery trip', common_1.HttpStatus.NOT_FOUND);
        }
        else {
            return listTrip;
        }
    }
    async getDeliveryTripByStatus(user, filter) {
        const listTrip = await this.deliveryTripService.getDeliveryTripByStatus(user, filter);
        if (!listTrip || listTrip.length == 0) {
            throw new common_1.HttpException('No data delivery trip', common_1.HttpStatus.NOT_FOUND);
        }
        else {
            return listTrip;
        }
    }
    async getDeliveryTripByShipper(user) {
        const listTrip = await this.deliveryTripService.getDeliveryTripByShipper(user);
        if (!listTrip || listTrip.length == 0) {
            throw new common_1.HttpException('No data delivery trip', common_1.HttpStatus.NOT_FOUND);
        }
        else {
            return listTrip;
        }
    }
    async getDeliveryTripByDate(kitchen, filter) {
        const listTrip = await this.deliveryTripService.getDeliveryTripByDeliveryDate(kitchen, filter);
        if (!listTrip || listTrip.length == 0) {
            throw new common_1.HttpException('No data delivery trip', common_1.HttpStatus.NOT_FOUND);
        }
        else {
            return listTrip;
        }
    }
    async getDeliveryTripById(id) {
        return this.deliveryTripService.getTripById(id);
    }
    async getTripBySession(filter) {
        return await this.deliveryTripService.getDeliveryTripBySession(filter);
    }
    async updateTripStatus(orderIds) {
        return await this.deliveryTripService.updateStatusTrip(orderIds);
    }
    async createDeliveryTrip(dto) {
        return await this.deliveryTripService.createTrip(dto);
    }
    async assignShipperToTrip(dto) {
        return await this.deliveryTripService.assignShipperToTrip(dto);
    }
    async rejectDeliveryTrip(id, user) {
        return await this.deliveryTripService.rejectByShipper(id, user);
    }
    async transferShipper(transfer) {
        return await this.deliveryTripService.directShipperByManager(transfer);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'GET ALL DELIVERY TRIP',
        type: [deliveryTrip_dto_1.DeliveryTripDTO],
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [deliveryTrip_filter_dto_1.TripFilter]),
    __metadata("design:returntype", Promise)
], DeliveryTripController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/byShipper/byStatus'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'GET DELIVERY TRIP BY SHIPPER + STATUS',
        type: [deliveryTrip_dto_1.DeliveryTripDTO],
    }),
    __param(0, (0, user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [account_entity_1.AccountEntity,
        deliveryTrip_filter_dto_1.TripFilter]),
    __metadata("design:returntype", Promise)
], DeliveryTripController.prototype, "getDeliveryTripByStatus", null);
__decorate([
    (0, common_1.Get)('/byShipper'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'GET DELIVERY TRIP BY SHIPPER',
        type: [deliveryTrip_dto_1.DeliveryTripDTO],
    }),
    __param(0, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [account_entity_1.AccountEntity]),
    __metadata("design:returntype", Promise)
], DeliveryTripController.prototype, "getDeliveryTripByShipper", null);
__decorate([
    (0, common_1.Get)('/byShipper/byDate'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'GET DELIVERY TRIP BY SHIPPER',
        type: [deliveryTrip_dto_1.DeliveryTripDTO],
    }),
    __param(0, (0, user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [account_entity_1.AccountEntity,
        deliveryTrip_filter_dto_1.TripFilterDate]),
    __metadata("design:returntype", Promise)
], DeliveryTripController.prototype, "getDeliveryTripByDate", null);
__decorate([
    (0, common_1.Get)('/byId/:id'),
    (0, public_decorator_1.Public)(),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'GET DELIVERY TRIP BY ID',
        type: [deliveryTrip_dto_1.DeliveryTripDTO],
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DeliveryTripController.prototype, "getDeliveryTripById", null);
__decorate([
    (0, common_1.Get)('/bySession'),
    (0, public_decorator_1.Public)(),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'GET DELIVERY TRIP BY SESSION',
        type: [deliveryTrip_entity_1.DeliveryTripEntity],
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [deliveryTrip_filter_dto_1.TripFilterBySession]),
    __metadata("design:returntype", Promise)
], DeliveryTripController.prototype, "getTripBySession", null);
__decorate([
    (0, common_1.Post)('/update_status/:id'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'UPDATE DELIVERY TRIP STATUS',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [updateStatusTrip_dto_1.UpdateStatusTrip]),
    __metadata("design:returntype", Promise)
], DeliveryTripController.prototype, "updateTripStatus", null);
__decorate([
    (0, common_1.Post)(),
    (0, public_decorator_1.Public)(),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'CREATE DELIVERY TRIP',
        type: [deliveryTrip_entity_1.DeliveryTripEntity],
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createDeliveryTrip_dto_1.CreateTripDTO]),
    __metadata("design:returntype", Promise)
], DeliveryTripController.prototype, "createDeliveryTrip", null);
__decorate([
    (0, common_1.Post)('/shipper_toTrip'),
    (0, public_decorator_1.Public)(),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'ASSIGN SHIPPER TO TRIP',
        type: [deliveryTrip_entity_1.DeliveryTripEntity],
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createDeliveryTrip_dto_1.AssignShipperDTO]),
    __metadata("design:returntype", Promise)
], DeliveryTripController.prototype, "assignShipperToTrip", null);
__decorate([
    (0, common_1.Put)('/reject/:id'),
    (0, roles_decorator_1.Roles)(role_enum_1.RoleEnum.SHIPPER),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'REJECT DELIVERY TRIP',
        type: String,
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, account_entity_1.AccountEntity]),
    __metadata("design:returntype", Promise)
], DeliveryTripController.prototype, "rejectDeliveryTrip", null);
__decorate([
    (0, common_1.Put)('/transfer'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'MANAGER TRANSFER SHIPPER',
        type: String,
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [updateStatusTrip_dto_1.DirectShipperDTO]),
    __metadata("design:returntype", Promise)
], DeliveryTripController.prototype, "transferShipper", null);
DeliveryTripController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('delivery_trips'),
    (0, common_1.Controller)('delivery_trips'),
    __metadata("design:paramtypes", [deliveryTrip_service_1.DeliveryTripService])
], DeliveryTripController);
exports.DeliveryTripController = DeliveryTripController;
//# sourceMappingURL=deliveryTrip.controller.js.map