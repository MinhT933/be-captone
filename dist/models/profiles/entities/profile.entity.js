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
exports.ProfileEntity = void 0;
const classes_1 = require("@automapper/classes");
const account_entity_1 = require("../../accounts/entities/account.entity");
const base_entity_1 = require("../../base/base.entity");
const typeorm_1 = require("typeorm");
let ProfileEntity = class ProfileEntity extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], ProfileEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], ProfileEntity.prototype, "fullName", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { nullable: true }),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Date)
], ProfileEntity.prototype, "DOB", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], ProfileEntity.prototype, "avatar", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], ProfileEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => account_entity_1.AccountEntity, (account) => account.profile),
    (0, typeorm_1.JoinColumn)({ name: 'id' }),
    __metadata("design:type", account_entity_1.AccountEntity)
], ProfileEntity.prototype, "account", void 0);
ProfileEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'profiles' })
], ProfileEntity);
exports.ProfileEntity = ProfileEntity;
//# sourceMappingURL=profile.entity.js.map