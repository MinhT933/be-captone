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
exports.FoodsService = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const base_service_1 = require("../base/base.service");
const foods_entity_1 = require("./entities/foods.entity");
const food_categories_service_1 = require("../food-categories/food-categories.service");
let FoodsService = class FoodsService extends base_service_1.BaseService {
    constructor(foodsRepository, foodCategoryService) {
        super(foodsRepository);
        this.foodsRepository = foodsRepository;
        this.foodCategoryService = foodCategoryService;
    }
    async getFoodOnPackage(id) {
        const list = await this.foodsRepository
            .createQueryBuilder('foods')
            .select('foods.id, foods.name, foods.image')
            .leftJoin('foods.foodGroups', 'food_groups')
            .leftJoin('food_groups.packageItem', 'package_item')
            .leftJoin('package_item.packages', 'packages')
            .where('packages.id = :id', { id: id.packageId })
            .groupBy('foods.id, foods.name, foods.image')
            .execute();
        if (!list || list.length == 0) {
            throw new common_1.HttpException('No food found!', common_1.HttpStatus.NOT_FOUND);
        }
        return list;
    }
    async getFoodOnSession(id) {
        const list = await this.foodsRepository
            .createQueryBuilder('foods')
            .select('foods.id, foods.name, foods.image, foods.description')
            .leftJoin('foods.foodGroups', 'food_groups')
            .leftJoin('food_groups.packageItem', 'package_item')
            .leftJoin('package_item.orders', 'orders')
            .leftJoin('orders.batch', 'batchs')
            .leftJoin('batchs.session', 'sessions')
            .where('sessions.id = :id', { id: id })
            .execute();
        if (!list || list.length == 0) {
            throw new common_1.HttpException('No food in session!', common_1.HttpStatus.NOT_FOUND);
        }
        const result = Object.values(list.reduce((agr, cur) => {
            const key = `${cur.id}`;
            if (!agr[key])
                agr[key] = Object.assign(Object.assign({}, cur), { count: 1 });
            else
                agr[key].count += 1;
            return agr;
        }, {}));
        return result;
    }
    async getAllFood() {
        return await this.foodsRepository.find({
            relations: {
                foodCategory: true,
            },
        });
    }
    async getFoodByStatus(foodFilter) {
        const { statusFood } = foodFilter;
        return await this.foodsRepository.find({
            where: {
                status: (0, typeorm_1.Like)(Boolean(statusFood) ? statusFood : '%%'),
            },
            relations: {
                foodCategory: true,
            },
        });
    }
    async getFoodByCateFilter(filter) {
        const { status } = filter;
        const cate = await this.foodCategoryService.findOne({
            where: { id: filter.categoryId },
        });
        if (!cate) {
            throw new common_1.HttpException('Category not found', common_1.HttpStatus.NOT_FOUND);
        }
        const foods = await this.foodsRepository.find({
            where: {
                foodCategory: { id: filter.categoryId },
                status: (0, typeorm_1.Like)(Boolean(status) ? status : '%%'),
            },
            relations: {
                foodCategory: true,
            },
        });
        if (!foods || foods.length == 0) {
            throw new common_1.HttpException('No food found', common_1.HttpStatus.NOT_FOUND);
        }
        else {
            return foods;
        }
    }
    async getFoodByCategory(idCate) {
        const category = await this.foodCategoryService.findOne({
            where: { id: idCate },
        });
        if (!category) {
            throw new common_1.HttpException('Not found category', common_1.HttpStatus.NOT_FOUND);
        }
        const foodList = await this.foodsRepository
            .createQueryBuilder('foods')
            .leftJoinAndSelect('foods.foodCategory', 'food_categories')
            .where('food_categories.id = :id', {
            id: idCate,
        })
            .andWhere('foods.status = :status', {
            status: "active",
        })
            .getMany();
        if (!foodList || foodList.length === 0) {
            throw new common_1.HttpException("Don't have resource food for this category", common_1.HttpStatus.NOT_FOUND);
        }
        return foodList;
    }
    async createFood(data, image) {
        const category = await this.foodCategoryService.findOne({
            where: { id: data.foodCategoryId },
        });
        if (!category) {
            throw new common_1.HttpException(`Category ID not found : ${data.foodCategoryId}`, common_1.HttpStatus.NOT_FOUND);
        }
        else {
            const imageRes = await this.uploadImageToFirebase(image);
            return await this.save({
                name: data.name,
                description: data.description,
                price: data.price,
                image: imageRes,
                foodCategory: category,
            });
        }
    }
    async updateFood(id, data, image) {
        const food = await this.findOne({
            where: { id: id },
        });
        const category = await this.foodCategoryService.findOne({
            where: { id: data.foodCategoryId },
        });
        if (!food) {
            throw new common_1.HttpException(`${id} food not found`, common_1.HttpStatus.NOT_FOUND);
        }
        if (!category) {
            throw new common_1.HttpException(`${id} category not found`, common_1.HttpStatus.NOT_FOUND);
        }
        const imageRes = await this.uploadImageToFirebase(image);
        await this.save({
            id: id,
            name: data.name,
            description: data.description,
            price: data.price,
            image: imageRes,
            foodCategory: category,
        });
        return `Update Food Sucessfully ${id}`;
    }
    async updateStatusFood(id) {
        const food = await this.foodsRepository.findOne({
            where: { id: id },
        });
        if (!food) {
            throw new common_1.HttpException(`${id} not found`, common_1.HttpStatus.NOT_FOUND);
        }
        else {
            if (food.status == "active") {
                await this.foodsRepository.update({ id: id }, { status: "inActive" });
                return 'Food now is inActive';
            }
            else if (food.status == "inActive") {
                await this.foodsRepository.update({ id: id }, { status: "active" });
                return 'Food now is active';
            }
        }
    }
};
FoodsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(foods_entity_1.FoodEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        food_categories_service_1.FoodCategoriesService])
], FoodsService);
exports.FoodsService = FoodsService;
//# sourceMappingURL=foods.service.js.map