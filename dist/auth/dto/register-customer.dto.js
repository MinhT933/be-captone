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
exports.RegisterCustomerDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class RegisterCustomerDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RegisterCustomerDTO.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RegisterCustomerDTO.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RegisterCustomerDTO.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Date,
        description: 'dateOfBirth',
        default: new Date().toISOString().slice(0, 10),
    }),
    __metadata("design:type", Date)
], RegisterCustomerDTO.prototype, "DOB", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RegisterCustomerDTO.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'Default address' }),
    __metadata("design:type", String)
], RegisterCustomerDTO.prototype, "address", void 0);
exports.RegisterCustomerDTO = RegisterCustomerDTO;
//# sourceMappingURL=register-customer.dto.js.map