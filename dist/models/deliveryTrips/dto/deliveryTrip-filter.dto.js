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
exports.TripFilterBySession = exports.SessionFilterTrip = exports.TripFilterDate = exports.TripFilterByKitchen = exports.TripFilter = void 0;
const swagger_1 = require("@nestjs/swagger");
const deliveryTrip_enum_1 = require("../../../common/enums/deliveryTrip.enum");
class TripFilter {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: deliveryTrip_enum_1.DeliveryTripEnum,
        default: deliveryTrip_enum_1.DeliveryTripEnum.WAITING,
        required: false,
        description: 'Delivery trip status',
    }),
    __metadata("design:type", String)
], TripFilter.prototype, "status", void 0);
exports.TripFilter = TripFilter;
class TripFilterByKitchen {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: deliveryTrip_enum_1.DeliveryTripEnum,
        default: deliveryTrip_enum_1.DeliveryTripEnum.WAITING,
        required: false,
        description: 'Delivery trip status',
    }),
    __metadata("design:type", String)
], TripFilterByKitchen.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: new Date().toISOString().slice(0, 10) }),
    __metadata("design:type", Date)
], TripFilterByKitchen.prototype, "deliveryDate", void 0);
exports.TripFilterByKitchen = TripFilterByKitchen;
class TripFilterDate {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: new Date().toISOString().slice(0, 10) }),
    __metadata("design:type", Date)
], TripFilterDate.prototype, "deliveryDate", void 0);
exports.TripFilterDate = TripFilterDate;
class SessionFilterTrip {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: new Date().toISOString().slice(0, 10) }),
    __metadata("design:type", Date)
], SessionFilterTrip.prototype, "deliveryDate", void 0);
exports.SessionFilterTrip = SessionFilterTrip;
class TripFilterBySession {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], TripFilterBySession.prototype, "sessionId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: deliveryTrip_enum_1.DeliveryTripEnum,
        default: deliveryTrip_enum_1.DeliveryTripEnum.WAITING,
        required: false,
        description: 'Delivery trip status',
    }),
    __metadata("design:type", String)
], TripFilterBySession.prototype, "status", void 0);
exports.TripFilterBySession = TripFilterBySession;
//# sourceMappingURL=deliveryTrip-filter.dto.js.map