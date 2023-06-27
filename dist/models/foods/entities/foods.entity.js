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
exports.FoodEntity = void 0;
const classes_1 = require("@automapper/classes");
const base_entity_1 = require("../../base/base.entity");
const food_categories_entity_1 = require("../../food-categories/entities/food-categories.entity");
const food_group_entity_1 = require("../../food-group/entities/food-group.entity");
const typeorm_1 = require("typeorm");
let FoodEntity = class FoodEntity extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)(),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], FoodEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], FoodEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Number)
], FoodEntity.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], FoodEntity.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "active" }),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], FoodEntity.prototype, "status", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => food_categories_entity_1.FoodCategoryEntity),
    (0, typeorm_1.ManyToOne)(() => food_categories_entity_1.FoodCategoryEntity, (foodCategory) => foodCategory.foods),
    __metadata("design:type", food_categories_entity_1.FoodCategoryEntity)
], FoodEntity.prototype, "foodCategory", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => food_group_entity_1.FoodGroupEntity, (foodGroup) => foodGroup.foods),
    __metadata("design:type", Array)
], FoodEntity.prototype, "foodGroups", void 0);
FoodEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'foods' })
], FoodEntity);
exports.FoodEntity = FoodEntity;
//# sourceMappingURL=foods.entity.js.map