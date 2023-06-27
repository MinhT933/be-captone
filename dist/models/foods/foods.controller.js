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
exports.FoodsController = void 0;
const nestjs_1 = require("@automapper/nestjs");
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const role_enum_1 = require("../../common/enums/role.enum");
const public_decorator_1 = require("../../decorators/public.decorator");
const roles_decorator_1 = require("../../decorators/roles.decorator");
const create_food_dto_1 = require("./dto/create-food.dto");
const food_filter_dto_1 = require("./dto/food-filter.dto");
const food_dto_1 = require("./dto/food.dto");
const update_food_dto_1 = require("./dto/update-food.dto");
const foods_entity_1 = require("./entities/foods.entity");
const foods_service_1 = require("./foods.service");
let FoodsController = class FoodsController {
    constructor(foodsService) {
        this.foodsService = foodsService;
    }
    async findAll() {
        const listFood = await this.foodsService.getAllFood();
        if (!listFood || listFood.length == 0) {
            throw new common_1.HttpException("Dont't have resource food", common_1.HttpStatus.NOT_FOUND);
        }
        return listFood;
    }
    async findFoodOnPackage(find) {
        return await this.foodsService.getFoodOnPackage(find);
    }
    async findFoodOnSession(id) {
        return await this.foodsService.getFoodOnSession(id);
    }
    async findByCategoryFilter(filter) {
        return await this.foodsService.getFoodByCateFilter(filter);
    }
    async getFoodByStatus(foodFilter) {
        const listFood = await this.foodsService.getFoodByStatus(foodFilter);
        if (!listFood || listFood.length == 0) {
            throw new common_1.HttpException("Dont't have resource food", common_1.HttpStatus.NOT_FOUND);
        }
        return listFood;
    }
    async findFoodById(id) {
        const food = await this.foodsService.findOne({
            where: { id: id },
            relations: { foodCategory: true },
        });
        if (!food) {
            throw new common_1.HttpException("Dont't have resource food", common_1.HttpStatus.NOT_FOUND);
        }
        return food;
    }
    async findFoodByCategory(idCate) {
        return await this.foodsService.getFoodByCategory(idCate);
    }
    async createFood(createFoodDTO, image) {
        return await this.foodsService.createFood(createFoodDTO, image);
    }
    async updateFood(id, updateFood, image) {
        return await this.foodsService.updateFood(id, updateFood, image);
    }
    async updateStatusFood(id) {
        return await this.foodsService.updateStatusFood(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'GET ALL FOOD',
        type: [food_dto_1.FoodDTO],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FoodsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/food-onPackage'),
    (0, public_decorator_1.Public)(),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'GET ALL FOOD',
        type: [food_dto_1.FoodDTO],
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [food_filter_dto_1.FoodFindByPackage]),
    __metadata("design:returntype", Promise)
], FoodsController.prototype, "findFoodOnPackage", null);
__decorate([
    (0, common_1.Get)('/session-food/:id'),
    (0, public_decorator_1.Public)(),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'GET ALL FOOD',
        type: [food_dto_1.FoodDTO],
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FoodsController.prototype, "findFoodOnSession", null);
__decorate([
    (0, common_1.Get)('/byCatefory_filter'),
    (0, public_decorator_1.Public)(),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'GET FOOD BY CATEGORY AND FILTER STATUS',
        type: [food_dto_1.FoodDTO],
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [food_filter_dto_1.FoodFilter]),
    __metadata("design:returntype", Promise)
], FoodsController.prototype, "findByCategoryFilter", null);
__decorate([
    (0, common_1.Get)('/byStatus'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'GET ALL FOOD BY STATUS',
        type: [food_dto_1.FoodDTO],
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [food_filter_dto_1.FoodFilterDTO]),
    __metadata("design:returntype", Promise)
], FoodsController.prototype, "getFoodByStatus", null);
__decorate([
    (0, common_1.Get)('/:id'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'GET FOOD BY ID',
        type: food_dto_1.FoodDTO,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FoodsController.prototype, "findFoodById", null);
__decorate([
    (0, common_1.Get)('category/:id'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'GET FOOD BY CATEGORY',
        type: [food_dto_1.FoodDTO],
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FoodsController.prototype, "findFoodByCategory", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(role_enum_1.RoleEnum.MANAGER),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Create new food successfully',
        type: food_dto_1.FoodDTO,
    }),
    (0, common_1.UseInterceptors)((0, nestjs_1.MapInterceptor)(foods_entity_1.FoodEntity, food_dto_1.FoodDTO)),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_food_dto_1.CreateFoodDTO, Object]),
    __metadata("design:returntype", Promise)
], FoodsController.prototype, "createFood", null);
__decorate([
    (0, common_1.Put)('/:id'),
    (0, roles_decorator_1.Roles)(role_enum_1.RoleEnum.MANAGER),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Update category successfully',
        type: String,
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_food_dto_1.UpdateFoodDTO, Object]),
    __metadata("design:returntype", Promise)
], FoodsController.prototype, "updateFood", null);
__decorate([
    (0, common_1.Put)('/update-status/:id'),
    (0, roles_decorator_1.Roles)(role_enum_1.RoleEnum.MANAGER),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Update Food Status',
        type: String,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FoodsController.prototype, "updateStatusFood", null);
FoodsController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('foods'),
    (0, common_1.Controller)('foods'),
    __metadata("design:paramtypes", [foods_service_1.FoodsService])
], FoodsController);
exports.FoodsController = FoodsController;
//# sourceMappingURL=foods.controller.js.map