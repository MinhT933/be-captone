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
exports.KitchenEntity = void 0;
const classes_1 = require("@automapper/classes");
const account_entity_1 = require("../../accounts/entities/account.entity");
const base_entity_1 = require("../../base/base.entity");
const sessions_entity_1 = require("../../sessions/entities/sessions.entity");
const shipper_entity_1 = require("../../shippers/entities/shipper.entity");
const stations_entity_1 = require("../../stations/entities/stations.entity");
const typeorm_1 = require("typeorm");
let KitchenEntity = class KitchenEntity extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], KitchenEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('time'),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Date)
], KitchenEntity.prototype, "openTime", void 0);
__decorate([
    (0, typeorm_1.Column)('time'),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Date)
], KitchenEntity.prototype, "closeTime", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Date)
], KitchenEntity.prototype, "openingDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], KitchenEntity.prototype, "address", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => account_entity_1.AccountEntity),
    (0, typeorm_1.OneToOne)(() => account_entity_1.AccountEntity, (account) => account.kitchen, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'id' }),
    __metadata("design:type", account_entity_1.AccountEntity)
], KitchenEntity.prototype, "account", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => stations_entity_1.StationEntity, (station) => station.kitchen),
    __metadata("design:type", Array)
], KitchenEntity.prototype, "stations", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => shipper_entity_1.ShipperEntity, (shippers) => shippers.kitchen),
    __metadata("design:type", Array)
], KitchenEntity.prototype, "shippers", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => sessions_entity_1.SessionEntity, (sessions) => sessions.kitchen),
    __metadata("design:type", Array)
], KitchenEntity.prototype, "sessions", void 0);
KitchenEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'kitchens' })
], KitchenEntity);
exports.KitchenEntity = KitchenEntity;
//# sourceMappingURL=kitchens.entity.js.map