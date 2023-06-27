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
exports.FoodGroupEntity = void 0;
const classes_1 = require("@automapper/classes");
const food_group_enum_1 = require("../../../common/enums/food-group.enum");
const base_entity_1 = require("../../base/base.entity");
const foods_entity_1 = require("../../foods/entities/foods.entity");
const package_item_entity_1 = require("../../package-item/entities/package-item.entity");
const typeorm_1 = require("typeorm");
let FoodGroupEntity = class FoodGroupEntity extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)(),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], FoodGroupEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], FoodGroupEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: food_group_enum_1.FoodGroupEnum.ACTIVE }),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], FoodGroupEntity.prototype, "status", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => [foods_entity_1.FoodEntity]),
    (0, typeorm_1.ManyToMany)(() => foods_entity_1.FoodEntity, (food) => food.foodGroups),
    (0, typeorm_1.JoinTable)({ name: 'food_group_item' }),
    __metadata("design:type", Array)
], FoodGroupEntity.prototype, "foods", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => package_item_entity_1.PackageItemEntity, (packageItems) => packageItems.foodGroup),
    __metadata("design:type", Array)
], FoodGroupEntity.prototype, "packageItem", void 0);
FoodGroupEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'food_groups' })
], FoodGroupEntity);
exports.FoodGroupEntity = FoodGroupEntity;
//# sourceMappingURL=food-group.entity.js.map