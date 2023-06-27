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
exports.FoodFindByPackage = exports.FoodFilter = exports.FoodFilterDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const active_enum_1 = require("../../../common/enums/active.enum");
class FoodFilterDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: active_enum_1.InActiveEnum,
        required: false,
        description: 'Food status',
        default: "active",
    }),
    __metadata("design:type", String)
], FoodFilterDTO.prototype, "statusFood", void 0);
exports.FoodFilterDTO = FoodFilterDTO;
class FoodFilter {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], FoodFilter.prototype, "categoryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: active_enum_1.InActiveEnum,
        required: false,
        description: 'Food status',
        default: "active",
    }),
    __metadata("design:type", String)
], FoodFilter.prototype, "status", void 0);
exports.FoodFilter = FoodFilter;
class FoodFindByPackage {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], FoodFindByPackage.prototype, "packageId", void 0);
exports.FoodFindByPackage = FoodFindByPackage;
//# sourceMappingURL=food-filter.dto.js.map