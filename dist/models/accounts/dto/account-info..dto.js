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
exports.AccountInfoDTO = void 0;
const role_dto_1 = require("./../../roles/dto/role.dto");
const base_dto_1 = require("../../base/base.dto");
const classes_1 = require("@automapper/classes");
const profile_dto_1 = require("../../profiles/dto/profile.dto");
const kitchen_info_dto_1 = require("../../kitchens/dto/kitchen.info.dto");
const shipper_info_dto_1 = require("../../shippers/dto/shipper.info.dto");
class AccountInfoDTO extends base_dto_1.BaseDTO {
}
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], AccountInfoDTO.prototype, "phone", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], AccountInfoDTO.prototype, "status", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => profile_dto_1.ProfileDTO),
    __metadata("design:type", profile_dto_1.ProfileDTO)
], AccountInfoDTO.prototype, "profile", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => role_dto_1.RoleDTO),
    __metadata("design:type", role_dto_1.RoleDTO)
], AccountInfoDTO.prototype, "role", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => kitchen_info_dto_1.KitchenInfoDTO),
    __metadata("design:type", kitchen_info_dto_1.KitchenInfoDTO)
], AccountInfoDTO.prototype, "kitchen", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => shipper_info_dto_1.ShipperInfoDTO),
    __metadata("design:type", shipper_info_dto_1.ShipperInfoDTO)
], AccountInfoDTO.prototype, "shipper", void 0);
exports.AccountInfoDTO = AccountInfoDTO;
//# sourceMappingURL=account-info..dto.js.map