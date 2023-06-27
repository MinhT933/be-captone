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
exports.AccountEntity = void 0;
const classes_1 = require("@automapper/classes");
const accountStatus_enum_1 = require("../../../common/enums/accountStatus.enum");
const base_entity_1 = require("../../base/base.entity");
const kitchens_entity_1 = require("../../kitchens/entities/kitchens.entity");
const notification_entity_1 = require("../../notifications/entities/notification.entity");
const profile_entity_1 = require("../../profiles/entities/profile.entity");
const role_entity_1 = require("../../roles/entities/role.entity");
const shipper_entity_1 = require("../../shippers/entities/shipper.entity");
const subscription_entity_1 = require("../../subscriptions/entities/subscription.entity");
const typeorm_1 = require("typeorm");
let AccountEntity = class AccountEntity extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], AccountEntity.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], AccountEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: accountStatus_enum_1.AccountStatusEnum.ACTIVE }),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], AccountEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], AccountEntity.prototype, "refreshToken", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], AccountEntity.prototype, "deviceToken", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => shipper_entity_1.ShipperEntity),
    (0, typeorm_1.OneToOne)(() => shipper_entity_1.ShipperEntity, (shipper) => shipper.account, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", shipper_entity_1.ShipperEntity)
], AccountEntity.prototype, "shipper", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => kitchens_entity_1.KitchenEntity),
    (0, typeorm_1.OneToOne)(() => kitchens_entity_1.KitchenEntity, (kitchen) => kitchen.account, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", kitchens_entity_1.KitchenEntity)
], AccountEntity.prototype, "kitchen", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => role_entity_1.RoleEntity),
    (0, typeorm_1.ManyToOne)(() => role_entity_1.RoleEntity, (role) => role.accounts),
    __metadata("design:type", role_entity_1.RoleEntity)
], AccountEntity.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => profile_entity_1.ProfileEntity, (profile) => profile.account),
    (0, classes_1.AutoMap)(() => profile_entity_1.ProfileEntity),
    __metadata("design:type", profile_entity_1.ProfileEntity)
], AccountEntity.prototype, "profile", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => notification_entity_1.NotificationEntity, (notification) => notification.account),
    __metadata("design:type", Array)
], AccountEntity.prototype, "notifications", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => subscription_entity_1.SubscriptionEntity, (subscription) => subscription.account),
    __metadata("design:type", Array)
], AccountEntity.prototype, "subscriptions", void 0);
AccountEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'accounts' })
], AccountEntity);
exports.AccountEntity = AccountEntity;
//# sourceMappingURL=account.entity.js.map