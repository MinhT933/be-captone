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
exports.SessionFilterOrder = exports.PreFoodByWeek = exports.OrderGetByKitchen = exports.OrderSearchByDate = exports.OrderFilterDTO = exports.OrderFilterMe = exports.OrderFilter = void 0;
const swagger_1 = require("@nestjs/swagger");
const order_enum_1 = require("../../../common/enums/order.enum");
const base_filter_1 = require("../../base/base.filter");
class OrderFilter extends base_filter_1.BaseFilter {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Date,
        description: 'Start Date Search',
        required: false,
        default: new Date(),
    }),
    __metadata("design:type", Date)
], OrderFilter.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'End Date Search',
        required: false,
        default: new Date(),
    }),
    __metadata("design:type", Date)
], OrderFilter.prototype, "endDate", void 0);
exports.OrderFilter = OrderFilter;
class OrderFilterMe extends base_filter_1.BaseFilter {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: order_enum_1.OrderEnum,
        description: 'Sort Ascending or Descending by ',
        required: false,
        default: order_enum_1.OrderEnum.PENDING,
    }),
    __metadata("design:type", String)
], OrderFilterMe.prototype, "status", void 0);
exports.OrderFilterMe = OrderFilterMe;
class OrderFilterDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: order_enum_1.OrderEnum,
        description: 'Sort Ascending or Descending by ',
        required: false,
        default: order_enum_1.OrderEnum.PENDING,
    }),
    __metadata("design:type", String)
], OrderFilterDTO.prototype, "status", void 0);
exports.OrderFilterDTO = OrderFilterDTO;
class OrderSearchByDate {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: new Date().toISOString().slice(0, 10) }),
    __metadata("design:type", Date)
], OrderSearchByDate.prototype, "deliveryDate", void 0);
exports.OrderSearchByDate = OrderSearchByDate;
class OrderGetByKitchen {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OrderGetByKitchen.prototype, "stationId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OrderGetByKitchen.prototype, "kitchenId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OrderGetByKitchen.prototype, "time_slotId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: new Date().toISOString().slice(0, 10) }),
    __metadata("design:type", Date)
], OrderGetByKitchen.prototype, "deliveryDate", void 0);
exports.OrderGetByKitchen = OrderGetByKitchen;
class PreFoodByWeek {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], PreFoodByWeek.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], PreFoodByWeek.prototype, "endDate", void 0);
exports.PreFoodByWeek = PreFoodByWeek;
class SessionFilterOrder {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SessionFilterOrder.prototype, "sessionId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: order_enum_1.OrderEnum,
        description: 'Sort Ascending or Descending by ',
        required: false,
        default: null,
    }),
    __metadata("design:type", String)
], SessionFilterOrder.prototype, "status", void 0);
exports.SessionFilterOrder = SessionFilterOrder;
//# sourceMappingURL=order-filter.dto.js.map