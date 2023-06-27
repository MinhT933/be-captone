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
exports.SessionDTO = void 0;
const classes_1 = require("@automapper/classes");
const base_dto_1 = require("../../base/base.dto");
const deliveryTrip_dto_1 = require("../../deliveryTrips/dto/deliveryTrip.dto");
const kitchen_dto_1 = require("../../kitchens/dto/kitchen.dto");
const order_dto_1 = require("../../orders/dto/order.dto");
const shipper_dto_1 = require("../../shippers/dto/shipper.dto");
const time_slot_dto_1 = require("../../time-slots/dto/time-slot.dto");
class SessionDTO extends base_dto_1.BaseDTO {
}
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Date)
], SessionDTO.prototype, "workDate", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], SessionDTO.prototype, "status", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => [order_dto_1.OrderDTO]),
    __metadata("design:type", Array)
], SessionDTO.prototype, "orders", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => [deliveryTrip_dto_1.DeliveryTripDTO]),
    __metadata("design:type", Array)
], SessionDTO.prototype, "deliveryTrips", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => time_slot_dto_1.TimeSlotDTO),
    __metadata("design:type", time_slot_dto_1.TimeSlotDTO)
], SessionDTO.prototype, "timeSlot", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => kitchen_dto_1.KitchenDTO),
    __metadata("design:type", kitchen_dto_1.KitchenDTO)
], SessionDTO.prototype, "kitchen", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => [shipper_dto_1.ShipperDTO]),
    __metadata("design:type", Array)
], SessionDTO.prototype, "shippers", void 0);
exports.SessionDTO = SessionDTO;
//# sourceMappingURL=sessions.dto.js.map