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
exports.BatchEntity = void 0;
const classes_1 = require("@automapper/classes");
const batch_enum_1 = require("../../../common/enums/batch.enum");
const base_entity_1 = require("../../base/base.entity");
const deliveryTrip_entity_1 = require("../../deliveryTrips/entities/deliveryTrip.entity");
const order_entity_1 = require("../../orders/entities/order.entity");
const sessions_entity_1 = require("../../sessions/entities/sessions.entity");
const stations_entity_1 = require("../../stations/entities/stations.entity");
const typeorm_1 = require("typeorm");
let BatchEntity = class BatchEntity extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], BatchEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: batch_enum_1.BatchEnum.WAITING }),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], BatchEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => stations_entity_1.StationEntity, (station) => station.batchs),
    __metadata("design:type", stations_entity_1.StationEntity)
], BatchEntity.prototype, "station", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => deliveryTrip_entity_1.DeliveryTripEntity),
    (0, typeorm_1.ManyToOne)(() => deliveryTrip_entity_1.DeliveryTripEntity, (deliveryTrip) => deliveryTrip.batchs),
    __metadata("design:type", deliveryTrip_entity_1.DeliveryTripEntity)
], BatchEntity.prototype, "deliveryTrip", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => sessions_entity_1.SessionEntity, (session) => session.batchs),
    __metadata("design:type", sessions_entity_1.SessionEntity)
], BatchEntity.prototype, "session", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_entity_1.OrderEntity, (orders) => orders.batch),
    __metadata("design:type", Array)
], BatchEntity.prototype, "orders", void 0);
BatchEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'batchs' })
], BatchEntity);
exports.BatchEntity = BatchEntity;
//# sourceMappingURL=batch.entity.js.map