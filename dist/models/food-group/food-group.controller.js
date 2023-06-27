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
exports.FoodGroupController = void 0;
const nestjs_1 = require("@automapper/nestjs");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const role_enum_1 = require("../../common/enums/role.enum");
const roles_decorator_1 = require("../../decorators/roles.decorator");
const create_food_group_dto_1 = require("./dto/create-food-group.dto");
const food_group_dto_1 = require("./dto/food-group.dto");
const foodGroup_filter_dto_1 = require("./dto/foodGroup-filter.dto");
const update_food_group_dto_1 = require("./dto/update-food-group.dto");
const food_group_entity_1 = require("./entities/food-group.entity");
const food_group_service_1 = require("./food-group.service");
let FoodGroupController = class FoodGroupController {
    constructor(foodGroupService) {
        this.foodGroupService = foodGroupService;
    }
    async listAllFoodGroup() {
        const listFoodGroup = await this.foodGroupService.getAllFoodGroup();
        if (!listFoodGroup || listFoodGroup.length == 0) {
            throw new common_1.HttpException('No data food group', common_1.HttpStatus.NOT_FOUND);
        }
        else {
            return listFoodGroup;
        }
    }
    async getFoodGroupByStatus(foodGroupFilter) {
        const listFoodGroup = await this.foodGroupService.getFoodGroupByStatus(foodGroupFilter);
        if (!listFoodGroup || listFoodGroup.length == 0) {
            throw new common_1.HttpException('No data food group', common_1.HttpStatus.NOT_FOUND);
        }
        else {
            return listFoodGroup;
        }
    }
    async findFoodById(id) {
        const foodGroup = await this.foodGroupService.findOne({
            where: { id: id },
            relations: { foods: { foodCategory: true } },
        });
        if (!foodGroup) {
            throw new common_1.HttpException("Dont't have resource", common_1.HttpStatus.NOT_FOUND);
        }
        return foodGroup;
    }
    async createFoodGroup(createDTO) {
        return await this.foodGroupService.createFoodGroup(createDTO);
    }
    async updateFoodGroup(id, updateDTO) {
        return await this.foodGroupService.updateFoodGroup(id, updateDTO);
    }
    async updateFoodGroupStatus(id) {
        return await this.foodGroupService.updateFoodGroupStatus(id);
    }
    async removeFoodGroup(id) {
        return await this.foodGroupService.removeFoodGroup(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'LIST ALL FOOD GROUP',
        type: [food_group_dto_1.FoodGroupDTO],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FoodGroupController.prototype, "listAllFoodGroup", null);
__decorate([
    (0, common_1.Get)('/byStatus'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'LIST FOOD GROUP BY STATUS',
        type: [food_group_dto_1.FoodGroupDTO],
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [foodGroup_filter_dto_1.FoodGroupFilterDTO]),
    __metadata("design:returntype", Promise)
], FoodGroupController.prototype, "getFoodGroupByStatus", null);
__decorate([
    (0, common_1.Get)('find/:id'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'GET FOODGROUP BY ID',
        type: food_group_dto_1.FoodGroupDTO,
    }),
    (0, common_1.UseInterceptors)((0, nestjs_1.MapInterceptor)(food_group_entity_1.FoodGroupEntity, food_group_dto_1.FoodGroupDTO)),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FoodGroupController.prototype, "findFoodById", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.RoleEnum.MANAGER),
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Create food group',
        type: food_group_dto_1.FoodGroupDTO,
    }),
    (0, common_1.UseInterceptors)((0, nestjs_1.MapInterceptor)(food_group_entity_1.FoodGroupEntity, food_group_dto_1.FoodGroupDTO)),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_food_group_dto_1.CreateFoodGroupDTO]),
    __metadata("design:returntype", Promise)
], FoodGroupController.prototype, "createFoodGroup", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.RoleEnum.MANAGER),
    (0, common_1.Put)('/:id'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'UPDATE FOOD GROUP',
        type: String,
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_food_group_dto_1.UpdateFoodGroupDTO]),
    __metadata("design:returntype", Promise)
], FoodGroupController.prototype, "updateFoodGroup", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.RoleEnum.MANAGER),
    (0, common_1.Put)('/active/:id'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'UPDATE FOOD GROUP STATUS',
        type: String,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FoodGroupController.prototype, "updateFoodGroupStatus", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.RoleEnum.MANAGER),
    (0, common_1.Put)('/remove/:id'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'REMOVE FOOD GROUP',
        type: String,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FoodGroupController.prototype, "removeFoodGroup", null);
FoodGroupController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('food-groups'),
    (0, common_1.Controller)('food-groups'),
    __metadata("design:paramtypes", [food_group_service_1.FoodGroupService])
], FoodGroupController);
exports.FoodGroupController = FoodGroupController;
//# sourceMappingURL=food-group.controller.js.map