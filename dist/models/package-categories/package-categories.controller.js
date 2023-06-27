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
exports.PackgeCategoriesController = void 0;
const nestjs_1 = require("@automapper/nestjs");
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const role_enum_1 = require("../../common/enums/role.enum");
const roles_decorator_1 = require("../../decorators/roles.decorator");
const create_package_category_1 = require("./dto/create-package-category");
const package_category_dto_1 = require("./dto/package-category.dto");
const update_package_category_1 = require("./dto/update-package-category");
const package_categories_entity_1 = require("./entities/package-categories.entity");
const package_categories_service_1 = require("./package-categories.service");
let PackgeCategoriesController = class PackgeCategoriesController {
    constructor(packageCategoriesService) {
        this.packageCategoriesService = packageCategoriesService;
    }
    async findAll() {
        const listPackageCategories = await this.packageCategoriesService.getAllPackageCategories();
        if (!listPackageCategories || listPackageCategories.length == 0) {
            throw new common_1.HttpException("Don't have resourse", common_1.HttpStatus.NOT_FOUND);
        }
        return listPackageCategories;
    }
    async createCategory(createPackageCategory, image) {
        return await this.packageCategoriesService.createPackageCategories(createPackageCategory.name, image);
    }
    async getCategoryHasPackageActive() {
        return await this.packageCategoriesService.getCategoryHasPackageActive();
    }
    async updatePackageCategory(id, update, image) {
        return await this.packageCategoriesService.updatePackageCategory(id, update.name, image);
    }
    async removeCategory(id) {
        return await this.packageCategoriesService.deletePackageCategory(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'GET ALL PACKAGE CATEGORY',
        type: [package_category_dto_1.PackageCategoryDTO],
    }),
    (0, common_1.UseInterceptors)((0, nestjs_1.MapInterceptor)(package_categories_entity_1.PackageCategoryEntity, package_category_dto_1.PackageCategoryDTO, {
        isArray: true,
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PackgeCategoriesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'CREATE NEW CATEGORY SUCCESSFULLY',
        type: package_category_dto_1.PackageCategoryDTO,
    }),
    (0, common_1.UseInterceptors)((0, nestjs_1.MapInterceptor)(package_categories_entity_1.PackageCategoryEntity, package_category_dto_1.PackageCategoryDTO)),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_package_category_1.CreatePackageCategoryDTO, Object]),
    __metadata("design:returntype", Promise)
], PackgeCategoriesController.prototype, "createCategory", null);
__decorate([
    (0, common_1.Get)('/hasPackage'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'GET CATEGORY PACKAGE ACTIVE',
        type: package_category_dto_1.PackageCategoryDTO,
    }),
    (0, common_1.UseInterceptors)((0, nestjs_1.MapInterceptor)(package_categories_entity_1.PackageCategoryEntity, package_category_dto_1.PackageCategoryDTO, {
        isArray: true,
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PackgeCategoriesController.prototype, "getCategoryHasPackageActive", null);
__decorate([
    (0, common_1.Put)('/:id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Update package category successfully',
        type: String,
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_package_category_1.UpdatePackageCategoryDTO, Object]),
    __metadata("design:returntype", Promise)
], PackgeCategoriesController.prototype, "updatePackageCategory", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, roles_decorator_1.Roles)(role_enum_1.RoleEnum.MANAGER),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Delete Category by Id',
        type: String,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PackgeCategoriesController.prototype, "removeCategory", null);
PackgeCategoriesController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('package-categories'),
    (0, common_1.Controller)('package-categories'),
    __metadata("design:paramtypes", [package_categories_service_1.PackageCategoriesService])
], PackgeCategoriesController);
exports.PackgeCategoriesController = PackgeCategoriesController;
//# sourceMappingURL=package-categories.controller.js.map