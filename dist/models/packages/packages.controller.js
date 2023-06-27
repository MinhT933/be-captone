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
exports.PackageController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const public_decorator_1 = require("../../decorators/public.decorator");
const packages_service_1 = require("./packages.service");
const packages_dto_1 = require("./dto/packages.dto");
const packages_entity_1 = require("./entities/packages.entity");
const create_package_dto_1 = require("./dto/create-package.dto");
const nestjs_1 = require("@automapper/nestjs");
const roles_decorator_1 = require("../../decorators/roles.decorator");
const role_enum_1 = require("../../common/enums/role.enum");
const update_package_dto_1 = require("./dto/update-package.dto");
const package_filter_dto_1 = require("./dto/package-filter.dto");
let PackageController = class PackageController {
    constructor(packageService) {
        this.packageService = packageService;
    }
    async getAllPackage() {
        const listPackages = await this.packageService.listAllPackage();
        if (!listPackages || listPackages.length == 0) {
            throw new common_1.HttpException('No data package', common_1.HttpStatus.NOT_FOUND);
        }
        return listPackages;
    }
    async getPackageByStatus(packageFilter) {
        const listPackages = await this.packageService.getPackageByStatus(packageFilter);
        if (!listPackages || listPackages.length == 0) {
            throw new common_1.HttpException('No data package', common_1.HttpStatus.NOT_FOUND);
        }
        return listPackages;
    }
    async getPackageByID(id) {
        const packageRes = await this.packageService.findOne({
            where: { id: id },
            relations: {
                packageCategory: true,
                packageItem: { foodGroup: true },
            },
        });
        if (!packageRes) {
            throw new common_1.HttpException("Dont't have resource", common_1.HttpStatus.NOT_FOUND);
        }
        return packageRes;
    }
    async findItemOfPackage(id) {
        const item = await this.packageService.findOne({
            where: { id: id },
            relations: { packageItem: true },
        });
        if (!item) {
            throw new common_1.HttpException("Dont't have resource PackageItem", common_1.HttpStatus.NOT_FOUND);
        }
        return item;
    }
    async createPackage(createData, image) {
        return await this.packageService.createPackage(createData, image);
    }
    async updatePackage(id, data, image) {
        return await this.packageService.updatePackage(id, data, image);
    }
    async confirmPackage(id) {
        return await this.packageService.confirmPackage(id);
    }
    async getPackageActiveByCate(categoryId) {
        return await this.packageService.getActivePackageByCategory(categoryId);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'GET ALL PACKAGE',
        type: [packages_entity_1.PackageEntity],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PackageController.prototype, "getAllPackage", null);
__decorate([
    (0, common_1.Get)('/byStatus'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'GET PACKAGE BY STATUS',
        type: [packages_entity_1.PackageEntity],
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [package_filter_dto_1.PackageFilterDTO]),
    __metadata("design:returntype", Promise)
], PackageController.prototype, "getPackageByStatus", null);
__decorate([
    (0, common_1.Get)('find/:id'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'GET PACKAGE BY ID',
        type: packages_entity_1.PackageEntity,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PackageController.prototype, "getPackageByID", null);
__decorate([
    (0, common_1.Get)('item/:id'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'GET Package Item BY ID PACKAGE',
        type: packages_dto_1.PackageDTO,
    }),
    (0, common_1.UseInterceptors)((0, nestjs_1.MapInterceptor)(packages_entity_1.PackageEntity, packages_dto_1.PackageDTO)),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PackageController.prototype, "findItemOfPackage", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.RoleEnum.MANAGER),
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'CREATE PACKAGE',
        type: packages_dto_1.PackageDTO,
    }),
    (0, common_1.UseInterceptors)((0, nestjs_1.MapInterceptor)(packages_entity_1.PackageEntity, packages_dto_1.PackageDTO)),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_package_dto_1.CreatePackageDTO, Object]),
    __metadata("design:returntype", Promise)
], PackageController.prototype, "createPackage", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.RoleEnum.MANAGER),
    (0, common_1.Put)('/update/:id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'UPDATE PACKAGE',
        type: String,
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_package_dto_1.UpdatePackageDTO, Object]),
    __metadata("design:returntype", Promise)
], PackageController.prototype, "updatePackage", null);
__decorate([
    (0, common_1.Put)('/confirm/:id'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'CONFIRM PACKAGE STATUS',
        type: String,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PackageController.prototype, "confirmPackage", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('/byCategory/:categoryId'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'GET ACTIVE PACKAGE BY CATEGORY',
        type: [packages_entity_1.PackageEntity],
    }),
    __param(0, (0, common_1.Param)('categoryId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PackageController.prototype, "getPackageActiveByCate", null);
PackageController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('packages'),
    (0, common_1.Controller)('packages'),
    __metadata("design:paramtypes", [packages_service_1.PackageService])
], PackageController);
exports.PackageController = PackageController;
//# sourceMappingURL=packages.controller.js.map