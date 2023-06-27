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
exports.PackageItemEntity = void 0;
const classes_1 = require("@automapper/classes");
const base_entity_1 = require("../../base/base.entity");
const food_group_entity_1 = require("../../food-group/entities/food-group.entity");
const order_entity_1 = require("../../orders/entities/order.entity");
const packages_entity_1 = require("../../packages/entities/packages.entity");
const typeorm_1 = require("typeorm");
let PackageItemEntity = class PackageItemEntity extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)('date'),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Date)
], PackageItemEntity.prototype, "deliveryDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Number)
], PackageItemEntity.prototype, "itemCode", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => food_group_entity_1.FoodGroupEntity),
    (0, typeorm_1.ManyToOne)(() => food_group_entity_1.FoodGroupEntity, (foodGroup) => foodGroup.packageItem),
    __metadata("design:type", food_group_entity_1.FoodGroupEntity)
], PackageItemEntity.prototype, "foodGroup", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => packages_entity_1.PackageEntity),
    (0, typeorm_1.ManyToOne)(() => packages_entity_1.PackageEntity, (packages) => packages.packageItem),
    __metadata("design:type", packages_entity_1.PackageEntity)
], PackageItemEntity.prototype, "packages", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => [order_entity_1.OrderEntity]),
    (0, typeorm_1.OneToMany)(() => order_entity_1.OrderEntity, (order) => order.packageItem),
    __metadata("design:type", Array)
], PackageItemEntity.prototype, "orders", void 0);
PackageItemEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'package_item' })
], PackageItemEntity);
exports.PackageItemEntity = PackageItemEntity;
//# sourceMappingURL=package-item.entity.js.map