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
exports.AccountStatusFilter = exports.AccountFilterDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const accountStatus_enum_1 = require("../../../common/enums/accountStatus.enum");
const role_enum_1 = require("../../../common/enums/role.enum");
class AccountFilterDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: role_enum_1.RoleEnum,
        required: false,
        description: 'Role account',
        default: role_enum_1.RoleEnum.ADMIN,
    }),
    __metadata("design:type", String)
], AccountFilterDTO.prototype, "role", void 0);
exports.AccountFilterDTO = AccountFilterDTO;
class AccountStatusFilter {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: accountStatus_enum_1.AccountStatusEnum,
        required: false,
        description: 'Account status',
        default: accountStatus_enum_1.AccountStatusEnum.ACTIVE,
    }),
    __metadata("design:type", String)
], AccountStatusFilter.prototype, "status", void 0);
exports.AccountStatusFilter = AccountStatusFilter;
//# sourceMappingURL=account-filter.dto.js.map