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
exports.PackageService = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const base_service_1 = require("../base/base.service");
const packages_entity_1 = require("./entities/packages.entity");
const nestjs_1 = require("@automapper/nestjs");
const package_categories_service_1 = require("../package-categories/package-categories.service");
const package_enum_1 = require("../../common/enums/package.enum");
let PackageService = class PackageService extends base_service_1.BaseService {
    constructor(packagesRepository, mapper, categoryService) {
        super(packagesRepository);
        this.packagesRepository = packagesRepository;
        this.mapper = mapper;
        this.categoryService = categoryService;
    }
    async listAllPackage() {
        return await this.packagesRepository.find({
            relations: {
                packageCategory: true,
                packageItem: true,
            },
        });
    }
    async getPackageByStatus(packageFilter) {
        const { statusPackage } = packageFilter;
        return await this.packagesRepository.find({
            where: { status: (0, typeorm_1.Like)(Boolean(statusPackage) ? statusPackage : '%%') },
            relations: {
                packageCategory: true,
                packageItem: true,
            },
        });
    }
    async createPackage(data, image) {
        const category = await this.categoryService.findOne({
            where: { id: data.categoryID },
        });
        if (data.startSale > data.endSale)
            throw new common_1.HttpException('start Sale must less than end Sale', common_1.HttpStatus.BAD_REQUEST);
        if (!category) {
            throw new common_1.HttpException(`Category ID not found: ${data.categoryID}`, common_1.HttpStatus.NOT_FOUND);
        }
        const imageRes = await this.uploadImageToFirebase(image);
        return await this.save({
            startSale: data.startSale,
            endSale: data.endSale,
            name: data.name,
            description: data.description,
            price: data.price,
            image: imageRes,
            totalDate: data.totalDate,
            totalMeal: data.totalMeal,
            packageCategory: category,
        });
    }
    async updatePackage(id, data, image) {
        const packageId = await this.packagesRepository.findOne({
            where: { id: id },
        });
        if (!packageId) {
            throw new common_1.HttpException(`${id} not found`, common_1.HttpStatus.NOT_FOUND);
        }
        else {
            const category = await this.categoryService.findOne({
                where: { id: data.categoryID },
            });
            if (data.startSale > data.endSale)
                throw new common_1.HttpException('start Sale must less than end Sale', common_1.HttpStatus.BAD_REQUEST);
            if (!category) {
                throw new common_1.HttpException(`Category ID not found: ${data.categoryID}`, common_1.HttpStatus.NOT_FOUND);
            }
            else {
                const imageRes = await this.uploadImageToFirebase(image);
                await this.save({
                    id: id,
                    startSale: data.startSale,
                    endSale: data.endSale,
                    name: data.name,
                    description: data.description,
                    price: data.price,
                    image: imageRes,
                    totalDate: data.totalDate,
                    totalMeal: data.totalMeal,
                    packageCategory: category,
                });
                return 'Update Package Successful';
            }
        }
    }
    async confirmPackage(id) {
        const packages = await this.packagesRepository.findOne({
            where: { id: id },
        });
        if (!packages) {
            throw new common_1.HttpException(`Package Id ${id} not found`, common_1.HttpStatus.NOT_FOUND);
        }
        else {
            if (packages.status == package_enum_1.PackageEnum.WAITING) {
                await this.packagesRepository.update({ id: id }, {
                    status: package_enum_1.PackageEnum.ACTIVE,
                });
                return 'Package is active';
            }
            else if (packages.status == package_enum_1.PackageEnum.ACTIVE) {
                await this.packagesRepository.update({ id: id }, {
                    status: package_enum_1.PackageEnum.IN_ACTIVE,
                });
                return 'Package is inActive';
            }
            else if (packages.status == package_enum_1.PackageEnum.IN_ACTIVE) {
                await this.packagesRepository.update({ id: id }, {
                    status: package_enum_1.PackageEnum.ACTIVE,
                });
                return 'Package is active';
            }
        }
    }
    async deletePackage(id) {
        const packages = await this.packagesRepository.findOne({
            where: { id: id },
        });
        if (packages) {
            await this.packagesRepository
                .createQueryBuilder()
                .delete()
                .from(packages_entity_1.PackageEntity)
                .where('id = :id', { id: id })
                .execute();
            return `Delete Successfully : ${id}`;
        }
        else {
            throw new common_1.HttpException(`${id} not found`, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async getActivePackageByCategory(categoryId) {
        const listPackage = await this.packagesRepository
            .createQueryBuilder('packages')
            .leftJoinAndSelect('packages.packageItem', 'package_item')
            .leftJoinAndSelect('packages.packageCategory', 'package_categories')
            .where('packages.packageCategory.id = :id', {
            id: categoryId,
        })
            .andWhere('packages.status = :status', { status: 'active' })
            .getMany();
        if (!listPackage || listPackage.length == 0) {
            throw new common_1.HttpException('No package found', common_1.HttpStatus.NOT_FOUND);
        }
        return listPackage;
    }
};
PackageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(packages_entity_1.PackageEntity)),
    __param(1, (0, nestjs_1.InjectMapper)()),
    __metadata("design:paramtypes", [typeorm_1.Repository, Object, package_categories_service_1.PackageCategoriesService])
], PackageService);
exports.PackageService = PackageService;
//# sourceMappingURL=packages.service.js.map