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
exports.KitchenDTO = void 0;
const classes_1 = require("@automapper/classes");
const accounts_dto_1 = require("../../accounts/dto/accounts.dto");
const profile_dto_1 = require("../../profiles/dto/profile.dto");
const base_dto_1 = require("../../base/base.dto");
class KitchenDTO extends base_dto_1.BaseDTO {
}
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], KitchenDTO.prototype, "address", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => profile_dto_1.ProfileDTO),
    __metadata("design:type", profile_dto_1.ProfileDTO)
], KitchenDTO.prototype, "profile", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => accounts_dto_1.AccountDTO),
    __metadata("design:type", accounts_dto_1.AccountDTO)
], KitchenDTO.prototype, "account", void 0);
exports.KitchenDTO = KitchenDTO;
//# sourceMappingURL=kitchen.dto.js.map