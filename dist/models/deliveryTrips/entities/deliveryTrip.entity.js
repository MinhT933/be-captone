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
exports.DeliveryTripEntity = void 0;
const classes_1 = require("@automapper/classes");
const base_entity_1 = require("../../base/base.entity");
const typeorm_1 = require("typeorm");
const shipper_entity_1 = require("../../shippers/entities/shipper.entity");
const sessions_entity_1 = require("../../sessions/entities/sessions.entity");
const batch_entity_1 = require("../../batchs/entities/batch.entity");
const deliveryTrip_enum_1 = require("../../../common/enums/deliveryTrip.enum");
let DeliveryTripEntity = class DeliveryTripEntity extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)('time', { nullable: true }),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Date)
], DeliveryTripEntity.prototype, "deliveryTime", void 0);
__decorate([
    (0, typeorm_1.Column)('time', { nullable: true }),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Date)
], DeliveryTripEntity.prototype, "arrivedTime", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Date)
], DeliveryTripEntity.prototype, "deliveryDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: deliveryTrip_enum_1.DeliveryTripEnum.WAITING }),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], DeliveryTripEntity.prototype, "status", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => shipper_entity_1.ShipperEntity),
    (0, typeorm_1.ManyToOne)(() => shipper_entity_1.ShipperEntity, (shipper) => shipper.deliveryTrips),
    __metadata("design:type", shipper_entity_1.ShipperEntity)
], DeliveryTripEntity.prototype, "shipper", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => sessions_entity_1.SessionEntity),
    (0, typeorm_1.ManyToOne)(() => sessions_entity_1.SessionEntity, (session) => session.deliveryTrips),
    __metadata("design:type", sessions_entity_1.SessionEntity)
], DeliveryTripEntity.prototype, "session", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => batch_entity_1.BatchEntity),
    (0, typeorm_1.OneToMany)(() => batch_entity_1.BatchEntity, (batchs) => batchs.deliveryTrip),
    __metadata("design:type", Array)
], DeliveryTripEntity.prototype, "batchs", void 0);
DeliveryTripEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'delivery_trips' })
], DeliveryTripEntity);
exports.DeliveryTripEntity = DeliveryTripEntity;
//# sourceMappingURL=deliveryTrip.entity.js.map