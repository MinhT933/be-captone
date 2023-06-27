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
exports.OrderEntity = void 0;
const classes_1 = require("@automapper/classes");
const order_enum_1 = require("../../../common/enums/order.enum");
const base_entity_1 = require("../../base/base.entity");
const batch_entity_1 = require("../../batchs/entities/batch.entity");
const package_item_entity_1 = require("../../package-item/entities/package-item.entity");
const sessions_entity_1 = require("../../sessions/entities/sessions.entity");
const stations_entity_1 = require("../../stations/entities/stations.entity");
const subscription_entity_1 = require("../../subscriptions/entities/subscription.entity");
const typeorm_1 = require("typeorm");
let OrderEntity = class OrderEntity extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ default: order_enum_1.OrderEnum.PENDING }),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], OrderEntity.prototype, "status", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => subscription_entity_1.SubscriptionEntity),
    (0, typeorm_1.ManyToOne)(() => subscription_entity_1.SubscriptionEntity, (subscription) => subscription.orders, {
        nullable: false,
    }),
    __metadata("design:type", subscription_entity_1.SubscriptionEntity)
], OrderEntity.prototype, "subscription", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => package_item_entity_1.PackageItemEntity),
    (0, typeorm_1.ManyToOne)(() => package_item_entity_1.PackageItemEntity, (packageItem) => packageItem.orders, {
        nullable: false,
    }),
    __metadata("design:type", package_item_entity_1.PackageItemEntity)
], OrderEntity.prototype, "packageItem", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => stations_entity_1.StationEntity),
    (0, typeorm_1.ManyToOne)(() => stations_entity_1.StationEntity, (station) => station.orders),
    __metadata("design:type", stations_entity_1.StationEntity)
], OrderEntity.prototype, "station", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => sessions_entity_1.SessionEntity, (session) => session.orders),
    __metadata("design:type", sessions_entity_1.SessionEntity)
], OrderEntity.prototype, "session", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => batch_entity_1.BatchEntity, (batch) => batch.orders),
    __metadata("design:type", batch_entity_1.BatchEntity)
], OrderEntity.prototype, "batch", void 0);
OrderEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'orders' })
], OrderEntity);
exports.OrderEntity = OrderEntity;
//# sourceMappingURL=order.entity.js.map