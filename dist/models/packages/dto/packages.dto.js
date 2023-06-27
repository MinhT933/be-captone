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
exports.PackageDTO = void 0;
const classes_1 = require("@automapper/classes");
const package_category_dto_1 = require("../../package-categories/dto/package-category.dto");
const package_item_dto_1 = require("../../package-item/dto/package-item.dto");
const base_dto_1 = require("../../base/base.dto");
class PackageDTO extends base_dto_1.BaseDTO {
}
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Date)
], PackageDTO.prototype, "startSale", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Date)
], PackageDTO.prototype, "endSale", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], PackageDTO.prototype, "name", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], PackageDTO.prototype, "description", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Number)
], PackageDTO.prototype, "price", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], PackageDTO.prototype, "image", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Number)
], PackageDTO.prototype, "totalDate", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Number)
], PackageDTO.prototype, "totalMeal", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], PackageDTO.prototype, "status", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => package_category_dto_1.PackageCategoryDTO),
    __metadata("design:type", package_category_dto_1.PackageCategoryDTO)
], PackageDTO.prototype, "packageCategory", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => package_item_dto_1.PackageItemDTO),
    __metadata("design:type", package_item_dto_1.PackageItemDTO)
], PackageDTO.prototype, "packageItem", void 0);
exports.PackageDTO = PackageDTO;
//# sourceMappingURL=packages.dto.js.map