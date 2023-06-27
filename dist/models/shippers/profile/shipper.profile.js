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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipperProfile = void 0;
const core_1 = require("@automapper/core");
const nestjs_1 = require("@automapper/nestjs");
const shipper_dto_1 = require("../dto/shipper.dto");
const shipper_entity_1 = require("../entities/shipper.entity");
let ShipperProfile = class ShipperProfile extends nestjs_1.AutomapperProfile {
    get profile() {
        return (mapper) => {
            (0, core_1.createMap)(mapper, shipper_entity_1.ShipperEntity, shipper_dto_1.ShipperDTO, (0, core_1.forMember)((destination) => destination.profile, (0, core_1.mapFrom)((s) => s.account.profile)));
            (0, core_1.createMap)(mapper, shipper_entity_1.ShipperEntity, shipper_dto_1.ShipperDTO);
        };
    }
    constructor(mapper) {
        super(mapper);
    }
};
ShipperProfile = __decorate([
    __param(0, (0, nestjs_1.InjectMapper)()),
    __metadata("design:paramtypes", [Object])
], ShipperProfile);
exports.ShipperProfile = ShipperProfile;
//# sourceMappingURL=shipper.profile.js.map