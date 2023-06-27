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
exports.SessionEntity = void 0;
const classes_1 = require("@automapper/classes");
const session_enum_1 = require("../../../common/enums/session.enum");
const base_entity_1 = require("../../base/base.entity");
const batch_entity_1 = require("../../batchs/entities/batch.entity");
const deliveryTrip_entity_1 = require("../../deliveryTrips/entities/deliveryTrip.entity");
const kitchens_entity_1 = require("../../kitchens/entities/kitchens.entity");
const order_entity_1 = require("../../orders/entities/order.entity");
const shipper_entity_1 = require("../../shippers/entities/shipper.entity");
const time_slots_entity_1 = require("../../time-slots/entities/time-slots.entity");
const typeorm_1 = require("typeorm");
let SessionEntity = class SessionEntity extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], SessionEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Date)
], SessionEntity.prototype, "workDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: session_enum_1.SessionEnum.WAITING }),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], SessionEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_entity_1.OrderEntity, (orders) => orders.session),
    __metadata("design:type", Array)
], SessionEntity.prototype, "orders", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => deliveryTrip_entity_1.DeliveryTripEntity, (deliveryTrips) => deliveryTrips.session),
    __metadata("design:type", Array)
], SessionEntity.prototype, "deliveryTrips", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => time_slots_entity_1.TimeSlotEntity, (timeSlot) => timeSlot.sessions),
    __metadata("design:type", time_slots_entity_1.TimeSlotEntity)
], SessionEntity.prototype, "timeSlot", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => batch_entity_1.BatchEntity, (batchs) => batchs.session),
    __metadata("design:type", Array)
], SessionEntity.prototype, "batchs", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => kitchens_entity_1.KitchenEntity, (kitchen) => kitchen.sessions),
    __metadata("design:type", kitchens_entity_1.KitchenEntity)
], SessionEntity.prototype, "kitchen", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => [shipper_entity_1.ShipperEntity]),
    (0, typeorm_1.ManyToMany)(() => shipper_entity_1.ShipperEntity, (shippers) => shippers.sessions),
    (0, typeorm_1.JoinTable)({ name: 'shipper_session' }),
    __metadata("design:type", Array)
], SessionEntity.prototype, "shippers", void 0);
SessionEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'sessions' })
], SessionEntity);
exports.SessionEntity = SessionEntity;
//# sourceMappingURL=sessions.entity.js.map