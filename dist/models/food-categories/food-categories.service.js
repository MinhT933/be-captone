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
exports.FoodCategoriesService = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const base_service_1 = require("../base/base.service");
const food_categories_entity_1 = require("./entities/food-categories.entity");
let FoodCategoriesService = class FoodCategoriesService extends base_service_1.BaseService {
    constructor(categoriesRepository) {
        super(categoriesRepository);
        this.categoriesRepository = categoriesRepository;
    }
    async getCategories() {
        return await this.categoriesRepository.find();
    }
    async updateCategory(id, data) {
        const cateId = await this.categoriesRepository.findOne({
            where: { id: id },
        });
        if (!cateId) {
            throw new common_1.HttpException(`${id} not found`, common_1.HttpStatus.NOT_FOUND);
        }
        else {
            await this.save({ id: id, name: data.name });
            return `Update Sucessfully ${id}`;
        }
    }
    async deleteCategoryById(id) {
        try {
            const cateId = await this.categoriesRepository.findOne({
                where: { id: id },
            });
            if (!cateId) {
                throw new common_1.HttpException(`${id} not found`, common_1.HttpStatus.NOT_FOUND);
            }
            else {
                await this.deleteById(id);
                return `Delete Successfully : ${id}`;
            }
        }
        catch (error) {
            throw new common_1.HttpException('Cannot delete (Get Foreign Key)', common_1.HttpStatus.NOT_FOUND);
        }
    }
};
FoodCategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(food_categories_entity_1.FoodCategoryEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], FoodCategoriesService);
exports.FoodCategoriesService = FoodCategoriesService;
//# sourceMappingURL=food-categories.service.js.map