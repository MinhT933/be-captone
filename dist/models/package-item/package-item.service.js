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
exports.PackageItemService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const food_group_enum_1 = require("../../common/enums/food-group.enum");
const typeorm_2 = require("typeorm");
const base_service_1 = require("../base/base.service");
const food_group_service_1 = require("../food-group/food-group.service");
const packages_service_1 = require("../packages/packages.service");
const package_item_entity_1 = require("./entities/package-item.entity");
let PackageItemService = class PackageItemService extends base_service_1.BaseService {
    constructor(packageItemRepository, foodGroupService, packageService) {
        super(packageItemRepository);
        this.packageItemRepository = packageItemRepository;
        this.foodGroupService = foodGroupService;
        this.packageService = packageService;
    }
    async getAllPackageItem() {
        return await this.packageItemRepository.find({
            relations: { foodGroup: true },
        });
    }
    async createPackageItem(data) {
        const { itemCode, deliveryDate, packageID, foodGroupID } = data;
        const packageCheck = await this.packageService.findOne({
            where: { id: packageID },
        });
        const foodGroupCheck = await this.foodGroupService.findOne({
            where: { id: foodGroupID },
        });
        if (!packageCheck) {
            throw new common_1.HttpException(`${packageID} package:  not found`, common_1.HttpStatus.NOT_FOUND);
        }
        if (!foodGroupCheck) {
            throw new common_1.HttpException(`${foodGroupID} foodGroup: Not found`, common_1.HttpStatus.NOT_FOUND);
        }
        if (foodGroupCheck.status == food_group_enum_1.FoodGroupEnum.IN_ACTIVE) {
            throw new common_1.HttpException('Food Group is InActive can not add', common_1.HttpStatus.BAD_REQUEST);
        }
        const newPackageItem = await this.packageItemRepository.save({
            itemCode: itemCode,
            deliveryDate: deliveryDate,
            packages: packageCheck,
            foodGroup: foodGroupCheck,
        });
        return await this.findOne({
            where: { id: newPackageItem.id },
            relations: { foodGroup: true },
        });
    }
    async deletePackageItem(id) {
        const item = await this.packageItemRepository.findOne({
            where: { id: id },
        });
        if (!item) {
            throw new common_1.HttpException(`PackageItem id ${id} not found`, common_1.HttpStatus.NOT_FOUND);
        }
        else {
            try {
                await this.packageItemRepository
                    .createQueryBuilder()
                    .delete()
                    .from(package_item_entity_1.PackageItemEntity)
                    .where('id = :id', { id: id })
                    .execute();
                return 'Package item deleted';
            }
            catch (error) {
                throw new common_1.HttpException(error, common_1.HttpStatus.BAD_REQUEST);
            }
        }
    }
    async updatePackageItem(id, dto) {
        const { foodGroupID } = dto;
        const item = await this.packageItemRepository.findOne({
            where: { id: id },
        });
        if (!item) {
            throw new common_1.HttpException(`Package item ${id} not found`, common_1.HttpStatus.NOT_FOUND);
        }
        const foodGroupCheck = await this.foodGroupService.findOne({
            where: { id: foodGroupID },
        });
        if (!foodGroupCheck) {
            throw new common_1.HttpException(`${foodGroupID} foodGroup: Not found`, common_1.HttpStatus.NOT_FOUND);
        }
        if (foodGroupCheck.status == food_group_enum_1.FoodGroupEnum.IN_ACTIVE) {
            throw new common_1.HttpException('Food Group is InActive can not add', common_1.HttpStatus.BAD_REQUEST);
        }
        await this.packageItemRepository.save({
            id: id,
            foodGroup: foodGroupCheck,
        });
        return 'Package item updated successful';
    }
};
PackageItemService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(package_item_entity_1.PackageItemEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        food_group_service_1.FoodGroupService,
        packages_service_1.PackageService])
], PackageItemService);
exports.PackageItemService = PackageItemService;
//# sourceMappingURL=package-item.service.js.map