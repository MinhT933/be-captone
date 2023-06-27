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
exports.FoodDTO = void 0;
const classes_1 = require("@automapper/classes");
const food_category_dto_1 = require("../../food-categories/dto/food-category.dto");
const base_dto_1 = require("../../base/base.dto");
class FoodDTO extends base_dto_1.BaseDTO {
}
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], FoodDTO.prototype, "name", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], FoodDTO.prototype, "description", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Number)
], FoodDTO.prototype, "price", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], FoodDTO.prototype, "image", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], FoodDTO.prototype, "status", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => food_category_dto_1.FoodCategoryDTO),
    __metadata("design:type", food_category_dto_1.FoodCategoryDTO)
], FoodDTO.prototype, "foodCategory", void 0);
exports.FoodDTO = FoodDTO;
//# sourceMappingURL=food.dto.js.map