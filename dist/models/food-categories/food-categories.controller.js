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
exports.FoodCategoriesController = void 0;
const nestjs_1 = require("@automapper/nestjs");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const role_enum_1 = require("../../common/enums/role.enum");
const roles_decorator_1 = require("../../decorators/roles.decorator");
const create_food_category_1 = require("./dto/create-food-category");
const food_category_dto_1 = require("./dto/food-category.dto");
const update_food_category_1 = require("./dto/update-food-category");
const food_categories_entity_1 = require("./entities/food-categories.entity");
const food_categories_service_1 = require("./food-categories.service");
let FoodCategoriesController = class FoodCategoriesController {
    constructor(foodCategoriesService) {
        this.foodCategoriesService = foodCategoriesService;
    }
    async findAll() {
        const listCategory = await this.foodCategoriesService.getCategories();
        if (!listCategory || listCategory.length == 0) {
            throw new common_1.HttpException("Dont't have resource", common_1.HttpStatus.NOT_FOUND);
        }
        return listCategory;
    }
    async findCategoryById(id) {
        const category = await this.foodCategoriesService.findOne({
            where: { id: id },
        });
        if (!category)
            throw new common_1.HttpException("Dont't have resource", common_1.HttpStatus.NOT_FOUND);
        return category;
    }
    async createCategory(createFoodCategory) {
        return await this.foodCategoriesService.save({
            name: createFoodCategory.name,
        });
    }
    async updateCategory(id, update) {
        return await this.foodCategoriesService.updateCategory(id, update);
    }
    async removeCategory(id) {
        return await this.foodCategoriesService.deleteCategoryById(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'GET ALL CATEGORY',
        type: [food_category_dto_1.FoodCategoryDTO],
    }),
    (0, common_1.UseInterceptors)((0, nestjs_1.MapInterceptor)(food_categories_entity_1.FoodCategoryEntity, food_category_dto_1.FoodCategoryDTO, { isArray: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FoodCategoriesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Get detail Category by ID',
        type: food_category_dto_1.FoodCategoryDTO,
    }),
    (0, common_1.UseInterceptors)((0, nestjs_1.MapInterceptor)(food_categories_entity_1.FoodCategoryEntity, food_category_dto_1.FoodCategoryDTO)),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FoodCategoriesController.prototype, "findCategoryById", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.RoleEnum.MANAGER),
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Created new category successfully',
        type: food_category_dto_1.FoodCategoryDTO,
    }),
    (0, common_1.UseInterceptors)((0, nestjs_1.MapInterceptor)(food_categories_entity_1.FoodCategoryEntity, food_category_dto_1.FoodCategoryDTO)),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_food_category_1.CreateFoodCategoryDTO]),
    __metadata("design:returntype", Promise)
], FoodCategoriesController.prototype, "createCategory", null);
__decorate([
    (0, common_1.Put)('/:id'),
    (0, roles_decorator_1.Roles)(role_enum_1.RoleEnum.MANAGER),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Update category successfully',
        type: String,
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_food_category_1.UpdateFoodCategoryDTO]),
    __metadata("design:returntype", Promise)
], FoodCategoriesController.prototype, "updateCategory", null);
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
], FoodCategoriesController.prototype, "removeCategory", null);
FoodCategoriesController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('food-categories'),
    (0, common_1.Controller)('food-categories'),
    __metadata("design:paramtypes", [food_categories_service_1.FoodCategoriesService])
], FoodCategoriesController);
exports.FoodCategoriesController = FoodCategoriesController;
//# sourceMappingURL=food-categories.controller.js.map