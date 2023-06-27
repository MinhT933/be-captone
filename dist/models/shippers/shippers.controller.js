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
exports.ShippersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_decorator_1 = require("../../decorators/user.decorator");
const account_entity_1 = require("../accounts/entities/account.entity");
const addShipper_dto_1 = require("./dto/addShipper.dto");
const shipper_status_filter_dto_1 = require("./dto/shipper-status-filter.dto");
const shipper_dto_1 = require("./dto/shipper.dto");
const update_shipper_1 = require("./dto/update_shipper");
const shipper_entity_1 = require("./entities/shipper.entity");
const shippers_service_1 = require("./shippers.service");
let ShippersController = class ShippersController {
    constructor(shippersService) {
        this.shippersService = shippersService;
    }
    async fidnAll(statusFilter) {
        const listShip = await this.shippersService.findAll(statusFilter);
        if (!listShip || listShip.length == 0) {
            throw new common_1.HttpException("Dont't have resource Shipper", common_1.HttpStatus.NOT_FOUND);
        }
        return listShip;
    }
    async getShipperByKitchen(filter) {
        return await this.shippersService.getShipperByKitchen(filter);
    }
    async getShipperByStatus(filter) {
        return await this.shippersService.getShipperByStatus(filter);
    }
    async getFreeShipper() {
        return await this.shippersService.getFreeShipper();
    }
    async findShipperByID(id) {
        const shipper = await this.shippersService.findOne({
            where: { id: id },
            relations: { account: { profile: true }, kitchen: true },
        });
        if (!shipper) {
            throw new common_1.HttpException("Dont't have resource shipper", common_1.HttpStatus.NOT_FOUND);
        }
        return shipper;
    }
    async addShipperToKitchen(dto) {
        return await this.shippersService.addShipperToKitchen(dto);
    }
    async updateShipper(id, update) {
        return await this.shippersService.updateShipper(id, update);
    }
    async inActiveShipper(id) {
        return await this.shippersService.updateStatusShipper(id);
    }
    async offByShipper(user) {
        return await this.shippersService.offByShipper(user);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'GET ALL SHIPPER BY STATUS',
        type: [shipper_dto_1.ShipperDTO],
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [shipper_status_filter_dto_1.ShipperStatusFilter]),
    __metadata("design:returntype", Promise)
], ShippersController.prototype, "fidnAll", null);
__decorate([
    (0, common_1.Get)('/byKitchen'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'GET SHIPPER BY KITCHEN',
        type: [shipper_entity_1.ShipperEntity],
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [shipper_status_filter_dto_1.ShipperStatusFilter]),
    __metadata("design:returntype", Promise)
], ShippersController.prototype, "getShipperByKitchen", null);
__decorate([
    (0, common_1.Get)('/byStatus'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'GET ALL KITCHEN',
        type: [shipper_entity_1.ShipperEntity],
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [shipper_status_filter_dto_1.ShipperFilterDTO]),
    __metadata("design:returntype", Promise)
], ShippersController.prototype, "getShipperByStatus", null);
__decorate([
    (0, common_1.Get)('/free_shipper'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'GET SHIPPER BY ID',
        type: shipper_entity_1.ShipperEntity,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ShippersController.prototype, "getFreeShipper", null);
__decorate([
    (0, common_1.Get)('/:id'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'GET SHIPPER BY ID',
        type: shipper_dto_1.ShipperDTO,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ShippersController.prototype, "findShipperByID", null);
__decorate([
    (0, common_1.Put)('/addKitchen'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'ADD SHIPPER TO KITCHEN',
        type: String,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [addShipper_dto_1.ListShipperID]),
    __metadata("design:returntype", Promise)
], ShippersController.prototype, "addShipperToKitchen", null);
__decorate([
    (0, common_1.Put)('/:id'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'UPDATE SHIPPER BY ID',
        type: shipper_dto_1.ShipperDTO,
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_shipper_1.UpdateShipperDTO]),
    __metadata("design:returntype", Promise)
], ShippersController.prototype, "updateShipper", null);
__decorate([
    (0, common_1.Put)('/status/:id'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'UPDATE STATUS SHIPPER BY ID',
        type: shipper_dto_1.ShipperDTO,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ShippersController.prototype, "inActiveShipper", null);
__decorate([
    (0, common_1.Put)('/off/byMe'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'UPDATE STATUS SHIPPER BY SHIPPER',
        type: String,
    }),
    __param(0, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [account_entity_1.AccountEntity]),
    __metadata("design:returntype", Promise)
], ShippersController.prototype, "offByShipper", null);
ShippersController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('shippers'),
    (0, common_1.Controller)('shippers'),
    __metadata("design:paramtypes", [shippers_service_1.ShippersService])
], ShippersController);
exports.ShippersController = ShippersController;
//# sourceMappingURL=shippers.controller.js.map