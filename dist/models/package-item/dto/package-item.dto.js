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
exports.PackageItemDTO = void 0;
const classes_1 = require("@automapper/classes");
const base_dto_1 = require("../../base/base.dto");
const food_group_dto_1 = require("../../food-group/dto/food-group.dto");
class PackageItemDTO extends base_dto_1.BaseDTO {
}
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Number)
], PackageItemDTO.prototype, "itemCode", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Date)
], PackageItemDTO.prototype, "deliveryDate", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => food_group_dto_1.FoodGroupDTO),
    __metadata("design:type", food_group_dto_1.FoodGroupDTO)
], PackageItemDTO.prototype, "foodGroup", void 0);
exports.PackageItemDTO = PackageItemDTO;
//# sourceMappingURL=package-item.dto.js.map