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
exports.FoodGroupService = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const base_service_1 = require("../base/base.service");
const food_group_entity_1 = require("./entities/food-group.entity");
const foods_service_1 = require("../foods/foods.service");
const food_group_enum_1 = require("../../common/enums/food-group.enum");
let FoodGroupService = class FoodGroupService extends base_service_1.BaseService {
    constructor(foodGroupRepository, foodsService) {
        super(foodGroupRepository);
        this.foodGroupRepository = foodGroupRepository;
        this.foodsService = foodsService;
    }
    async getAllFoodGroup() {
        return await this.query({ relations: { foods: true } });
    }
    async getFoodGroupByStatus(foodGroupFilter) {
        const { statusFG } = foodGroupFilter;
        return await this.foodGroupRepository.find({
            where: { status: (0, typeorm_1.Like)(Boolean(statusFG) ? statusFG : '%%') },
            relations: { foods: true },
        });
    }
    async createFoodGroup(data) {
        const { foodIds, name, description } = data;
        const foods = await this.foodsService.query({
            where: foodIds.map((id) => ({ id })),
        });
        if (!foods || foods.length === 0) {
            throw new common_1.HttpException('Not found food in system', common_1.HttpStatus.NOT_FOUND);
        }
        const newFoodGroup = await this.foodGroupRepository.save({
            name: name,
            description: description,
            foods,
        });
        if (!newFoodGroup)
            throw new common_1.HttpException('Error when create FG', common_1.HttpStatus.BAD_REQUEST);
        return await this.findOne({
            where: { id: newFoodGroup.id },
            relations: { foods: { foodCategory: true } },
        });
    }
    async updateFoodGroup(id, data) {
        const foodGroup = await this.foodGroupRepository.findOne({
            where: { id: id },
        });
        if (!foodGroup) {
            throw new common_1.HttpException(`${id} food group not found`, common_1.HttpStatus.NOT_FOUND);
        }
        else {
            try {
                const { foodIds, name, description } = data;
                const foods = await this.foodsService.query({
                    where: foodIds.map((id) => ({ id })),
                });
                if (!foods || foods.length === 0) {
                    throw new common_1.HttpException('Not found food in system', common_1.HttpStatus.NOT_FOUND);
                }
                await this.save({
                    id: id,
                    name: name,
                    description: description,
                    foods,
                });
                return 'Update food group successfull';
            }
            catch (error) {
                throw new common_1.HttpException(error, common_1.HttpStatus.BAD_REQUEST);
            }
        }
    }
    async updateFoodGroupStatus(id) {
        const foodGr = await this.foodGroupRepository.findOne({
            where: { id: id },
        });
        if (!foodGr) {
            throw new common_1.HttpException(`${id} not found`, common_1.HttpStatus.NOT_FOUND);
        }
        else {
            await this.foodGroupRepository.update({ id: id }, {
                status: food_group_enum_1.FoodGroupEnum.ACTIVE,
            });
            return 'Food group active';
        }
    }
    async removeFoodGroup(id) {
        const foodGr = await this.foodGroupRepository.findOne({
            where: { id: id },
        });
        if (!foodGr) {
            throw new common_1.HttpException(`${id} not found`, common_1.HttpStatus.NOT_FOUND);
        }
        else {
            await this.foodGroupRepository.update({ id: id }, { status: food_group_enum_1.FoodGroupEnum.IN_ACTIVE });
            return 'Food group inactive';
        }
    }
};
FoodGroupService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(food_group_entity_1.FoodGroupEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        foods_service_1.FoodsService])
], FoodGroupService);
exports.FoodGroupService = FoodGroupService;
//# sourceMappingURL=food-group.service.js.map