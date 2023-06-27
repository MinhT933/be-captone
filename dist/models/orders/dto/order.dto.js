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
exports.OrderDTO = void 0;
const classes_1 = require("@automapper/classes");
const food_dto_1 = require("../../foods/dto/food.dto");
const package_item_dto_1 = require("../../package-item/dto/package-item.dto");
const stations_dto_1 = require("../../stations/dto/stations.dto");
const subscription_dto_1 = require("../../subscriptions/dto/subscription.dto");
const base_dto_1 = require("../../base/base.dto");
class OrderDTO extends base_dto_1.BaseDTO {
}
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Date)
], OrderDTO.prototype, "deliveryDate", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Date)
], OrderDTO.prototype, "deliveryTime", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Number)
], OrderDTO.prototype, "priceFood", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Number)
], OrderDTO.prototype, "nameFood", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], OrderDTO.prototype, "status", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => subscription_dto_1.SubscriptionDTO),
    __metadata("design:type", subscription_dto_1.SubscriptionDTO)
], OrderDTO.prototype, "subscription", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => package_item_dto_1.PackageItemDTO),
    __metadata("design:type", package_item_dto_1.PackageItemDTO)
], OrderDTO.prototype, "packageItem", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => food_dto_1.FoodDTO),
    __metadata("design:type", food_dto_1.FoodDTO)
], OrderDTO.prototype, "food", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => stations_dto_1.StationDTO),
    __metadata("design:type", stations_dto_1.StationDTO)
], OrderDTO.prototype, "station", void 0);
exports.OrderDTO = OrderDTO;
//# sourceMappingURL=order.dto.js.map