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
exports.CheckToken = exports.DeviceTokenDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const IsNotEmptyString_decorator_1 = require("../../../decorators/validations/IsNotEmptyString.decorator");
class DeviceTokenDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'Device token of user login',
        required: true,
    }),
    (0, IsNotEmptyString_decorator_1.IsNotEmptyString)(),
    __metadata("design:type", String)
], DeviceTokenDTO.prototype, "deviceToken", void 0);
exports.DeviceTokenDTO = DeviceTokenDTO;
class CheckToken {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'Token check exist',
        required: true,
    }),
    __metadata("design:type", String)
], CheckToken.prototype, "token", void 0);
exports.CheckToken = CheckToken;
//# sourceMappingURL=deviceToken.dto.js.map