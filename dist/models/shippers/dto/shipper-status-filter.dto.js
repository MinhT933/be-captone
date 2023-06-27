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
exports.ShipperFilterDTO = exports.ShipperStatusFilter = void 0;
const swagger_1 = require("@nestjs/swagger");
const accountStatus_enum_1 = require("../../../common/enums/accountStatus.enum");
const shipperStatus_enum_1 = require("../../../common/enums/shipperStatus.enum");
class ShipperStatusFilter {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ShipperStatusFilter.prototype, "kitchenId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: shipperStatus_enum_1.ShipperStatusEnum,
        required: false,
        description: 'Shipper status',
        default: shipperStatus_enum_1.ShipperStatusEnum.ACTIVE,
    }),
    __metadata("design:type", String)
], ShipperStatusFilter.prototype, "status", void 0);
exports.ShipperStatusFilter = ShipperStatusFilter;
class ShipperFilterDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        description: 'Shipper account status',
        enum: accountStatus_enum_1.AccountStatusEnum,
        default: accountStatus_enum_1.AccountStatusEnum.ACTIVE,
    }),
    __metadata("design:type", String)
], ShipperFilterDTO.prototype, "statusAcc", void 0);
exports.ShipperFilterDTO = ShipperFilterDTO;
//# sourceMappingURL=shipper-status-filter.dto.js.map