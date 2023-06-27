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
exports.PackageFilterDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const package_enum_1 = require("../../../common/enums/package.enum");
class PackageFilterDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: package_enum_1.PackageEnum,
        required: false,
        description: 'Package status',
        default: package_enum_1.PackageEnum.ACTIVE,
    }),
    __metadata("design:type", String)
], PackageFilterDTO.prototype, "statusPackage", void 0);
exports.PackageFilterDTO = PackageFilterDTO;
//# sourceMappingURL=package-filter.dto.js.map