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
exports.KitchenController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const kitchen_dto_1 = require("./dto/kitchen.dto");
const kitchenFilter_dto_1 = require("./dto/kitchenFilter.dto");
const update_kitchen_dto_1 = require("./dto/update_kitchen.dto");
const kitchens_entity_1 = require("./entities/kitchens.entity");
const kitchens_service_1 = require("./kitchens.service");
let KitchenController = class KitchenController {
    constructor(kitchenService) {
        this.kitchenService = kitchenService;
    }
    async fidnAll() {
        const listKitchen = await this.kitchenService.query({
            relations: { account: { profile: true } },
        });
        if (!listKitchen || listKitchen.length == 0) {
            throw new common_1.HttpException("Dont't have resource Kitchen", common_1.HttpStatus.NOT_FOUND);
        }
        return listKitchen;
    }
    async getKitchenByStatus(filter) {
        return await this.kitchenService.getKitchenByStatus(filter);
    }
    async findKitchenByID(id) {
        const listKitchen = await this.kitchenService.findOne({
            where: { id: id },
            relations: { account: { profile: true } },
        });
        if (!listKitchen) {
            throw new common_1.HttpException("Dont't have resource Kitchen", common_1.HttpStatus.NOT_FOUND);
        }
        return listKitchen;
    }
    async updateKitchenByAdmin(id, update) {
        return await this.kitchenService.updateKitchen(id, update);
    }
    async updateStatusKitchen(id) {
        return await this.kitchenService.updateStatusKitchen(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'GET ALL KITCHEN',
        type: [kitchen_dto_1.KitchenDTO],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], KitchenController.prototype, "fidnAll", null);
__decorate([
    (0, common_1.Get)('/byStatus'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'GET ALL KITCHEN',
        type: [kitchens_entity_1.KitchenEntity],
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [kitchenFilter_dto_1.KitchenFilterDTO]),
    __metadata("design:returntype", Promise)
], KitchenController.prototype, "getKitchenByStatus", null);
__decorate([
    (0, common_1.Get)('/:id'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'GET KITCHEN BY ID',
        type: kitchen_dto_1.KitchenDTO,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], KitchenController.prototype, "findKitchenByID", null);
__decorate([
    (0, common_1.Put)('/:id'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'ADMIN UPDATE KITCHEN BY ID',
        type: kitchen_dto_1.KitchenDTO,
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_kitchen_dto_1.UpdateKitchenDTO]),
    __metadata("design:returntype", Promise)
], KitchenController.prototype, "updateKitchenByAdmin", null);
__decorate([
    (0, common_1.Put)('/status/:id'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'ADMIN UPDATE STATUS KITCHEN BY ID',
        type: kitchen_dto_1.KitchenDTO,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], KitchenController.prototype, "updateStatusKitchen", null);
KitchenController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('kitchens'),
    (0, common_1.Controller)('kitchens'),
    __metadata("design:paramtypes", [kitchens_service_1.KitchenService])
], KitchenController);
exports.KitchenController = KitchenController;
//# sourceMappingURL=kitchens.controller.js.map