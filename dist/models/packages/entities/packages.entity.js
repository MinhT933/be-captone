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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageEntity = void 0;
const classes_1 = require("@automapper/classes");
const package_enum_1 = require("../../../common/enums/package.enum");
const base_entity_1 = require("../../base/base.entity");
const package_categories_entity_1 = require("../../package-categories/entities/package-categories.entity");
const package_item_entity_1 = require("../../package-item/entities/package-item.entity");
const subscription_entity_1 = require("../../subscriptions/entities/subscription.entity");
const typeorm_1 = require("typeorm");
let PackageEntity = class PackageEntity extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)('datetime'),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Date)
], PackageEntity.prototype, "startSale", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime'),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Date)
], PackageEntity.prototype, "endSale", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], PackageEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], PackageEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Number)
], PackageEntity.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], PackageEntity.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Number)
], PackageEntity.prototype, "totalDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Number)
], PackageEntity.prototype, "totalMeal", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: package_enum_1.PackageEnum.WAITING }),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], PackageEntity.prototype, "status", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => [package_item_entity_1.PackageItemEntity]),
    (0, typeorm_1.OneToMany)(() => package_item_entity_1.PackageItemEntity, (packageItem) => packageItem.packages),
    __metadata("design:type", Array)
], PackageEntity.prototype, "packageItem", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => subscription_entity_1.SubscriptionEntity, (subscriptions) => subscriptions.packages),
    __metadata("design:type", Array)
], PackageEntity.prototype, "subscriptions", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => package_categories_entity_1.PackageCategoryEntity),
    (0, typeorm_1.ManyToOne)(() => package_categories_entity_1.PackageCategoryEntity, (packageCategory) => packageCategory.packages),
    __metadata("design:type", package_categories_entity_1.PackageCategoryEntity)
], PackageEntity.prototype, "packageCategory", void 0);
PackageEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'packages' })
], PackageEntity);
exports.PackageEntity = PackageEntity;
//# sourceMappingURL=packages.entity.js.map