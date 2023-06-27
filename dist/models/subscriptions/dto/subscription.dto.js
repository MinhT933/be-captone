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
exports.SubscriptionDTO = void 0;
const classes_1 = require("@automapper/classes");
const base_dto_1 = require("../../base/base.dto");
const packages_dto_1 = require("../../packages/dto/packages.dto");
const order_dto_1 = require("../../orders/dto/order.dto");
class SubscriptionDTO extends base_dto_1.BaseDTO {
}
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Number)
], SubscriptionDTO.prototype, "totalPrice", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Date)
], SubscriptionDTO.prototype, "subscriptionDate", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], SubscriptionDTO.prototype, "status", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => packages_dto_1.PackageDTO),
    __metadata("design:type", packages_dto_1.PackageDTO)
], SubscriptionDTO.prototype, "packages", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => [order_dto_1.OrderDTO]),
    __metadata("design:type", order_dto_1.OrderDTO)
], SubscriptionDTO.prototype, "orders", void 0);
exports.SubscriptionDTO = SubscriptionDTO;
//# sourceMappingURL=subscription.dto.js.map