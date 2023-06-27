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
exports.ListShipperID = exports.ShipperID = void 0;
const swagger_1 = require("@nestjs/swagger");
class ShipperID {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, description: 'ID Shipper' }),
    __metadata("design:type", String)
], ShipperID.prototype, "idShipper", void 0);
exports.ShipperID = ShipperID;
class ListShipperID {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [ShipperID],
        description: 'List Shipper id',
    }),
    __metadata("design:type", Array)
], ListShipperID.prototype, "shippers", void 0);
exports.ListShipperID = ListShipperID;
//# sourceMappingURL=add_shipper.dto.js.map