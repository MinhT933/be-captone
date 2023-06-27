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
exports.ShipperEntity = void 0;
const classes_1 = require("@automapper/classes");
const account_entity_1 = require("../../accounts/entities/account.entity");
const base_entity_1 = require("../../base/base.entity");
const deliveryTrip_entity_1 = require("../../deliveryTrips/entities/deliveryTrip.entity");
const kitchens_entity_1 = require("../../kitchens/entities/kitchens.entity");
const sessions_entity_1 = require("../../sessions/entities/sessions.entity");
const typeorm_1 = require("typeorm");
let ShipperEntity = class ShipperEntity extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], ShipperEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], ShipperEntity.prototype, "noPlate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], ShipperEntity.prototype, "vehicleType", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], ShipperEntity.prototype, "status", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => account_entity_1.AccountEntity),
    (0, typeorm_1.OneToOne)(() => account_entity_1.AccountEntity, (account) => account.shipper, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'id' }),
    __metadata("design:type", account_entity_1.AccountEntity)
], ShipperEntity.prototype, "account", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => deliveryTrip_entity_1.DeliveryTripEntity, (deliveryTrips) => deliveryTrips.shipper),
    __metadata("design:type", Array)
], ShipperEntity.prototype, "deliveryTrips", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => kitchens_entity_1.KitchenEntity, (kitchen) => kitchen.shippers),
    __metadata("design:type", kitchens_entity_1.KitchenEntity)
], ShipperEntity.prototype, "kitchen", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => sessions_entity_1.SessionEntity, (sessions) => sessions.shippers),
    __metadata("design:type", Array)
], ShipperEntity.prototype, "sessions", void 0);
ShipperEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'shippers' })
], ShipperEntity);
exports.ShipperEntity = ShipperEntity;
//# sourceMappingURL=shipper.entity.js.map