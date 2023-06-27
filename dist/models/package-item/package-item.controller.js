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
exports.PackageItemController = void 0;
const nestjs_1 = require("@automapper/nestjs");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const role_enum_1 = require("../../common/enums/role.enum");
const roles_decorator_1 = require("../../decorators/roles.decorator");
const create_package_item_dto_1 = require("./dto/create-package-item.dto");
const package_item_dto_1 = require("./dto/package-item.dto");
const update_package_item_1 = require("./dto/update-package-item");
const package_item_entity_1 = require("./entities/package-item.entity");
const package_item_service_1 = require("./package-item.service");
let PackageItemController = class PackageItemController {
    constructor(packageItemService) {
        this.packageItemService = packageItemService;
    }
    async getAllPackageItem() {
        const list = await this.packageItemService.getAllPackageItem();
        if (!list || list.length == 0) {
            throw new common_1.HttpException('No data package item', common_1.HttpStatus.NOT_FOUND);
        }
        else {
            return list;
        }
    }
    async getPackageItemByID(id) {
        const list = await this.packageItemService.findOne({
            where: { id: id },
            relations: { foodGroup: true },
        });
        if (!list) {
            throw new common_1.HttpException(`Package item ${id} not found`, common_1.HttpStatus.NOT_FOUND);
        }
        else {
            return list;
        }
    }
    async createPackageItem(createDTO) {
        return await this.packageItemService.createPackageItem(createDTO);
    }
    async updatePackageItem(id, dto) {
        return await this.packageItemService.updatePackageItem(id, dto);
    }
    async deletePackageItem(id) {
        return await this.packageItemService.deletePackageItem(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'GET ALL PACKAGE ITEM',
        type: [package_item_dto_1.PackageItemDTO],
    }),
    (0, common_1.UseInterceptors)((0, nestjs_1.MapInterceptor)(package_item_entity_1.PackageItemEntity, package_item_dto_1.PackageItemDTO, { isArray: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PackageItemController.prototype, "getAllPackageItem", null);
__decorate([
    (0, common_1.Get)('/:id'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'GET PACKAGE ITEM BY ID',
        type: package_item_dto_1.PackageItemDTO,
    }),
    (0, common_1.UseInterceptors)((0, nestjs_1.MapInterceptor)(package_item_entity_1.PackageItemEntity, package_item_dto_1.PackageItemDTO)),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PackageItemController.prototype, "getPackageItemByID", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.RoleEnum.MANAGER),
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Create Package Item',
        type: package_item_dto_1.PackageItemDTO,
    }),
    (0, common_1.UseInterceptors)((0, nestjs_1.MapInterceptor)(package_item_entity_1.PackageItemEntity, package_item_dto_1.PackageItemDTO)),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_package_item_dto_1.CreatePackageItemDTO]),
    __metadata("design:returntype", Promise)
], PackageItemController.prototype, "createPackageItem", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.RoleEnum.MANAGER),
    (0, common_1.Put)('/:id'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'UPDATE PACKAGE ITEM',
        type: String,
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_package_item_1.UpdatePackageItemDTO]),
    __metadata("design:returntype", Promise)
], PackageItemController.prototype, "updatePackageItem", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.RoleEnum.MANAGER),
    (0, common_1.Delete)('/:id'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'DELETE PACKAGE ITEM',
        type: String,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PackageItemController.prototype, "deletePackageItem", null);
PackageItemController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('package-item'),
    (0, common_1.Controller)('package-item'),
    __metadata("design:paramtypes", [package_item_service_1.PackageItemService])
], PackageItemController);
exports.PackageItemController = PackageItemController;
//# sourceMappingURL=package-item.controller.js.map