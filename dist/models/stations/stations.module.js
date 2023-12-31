"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StationsModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const stations_entity_1 = require("./entities/stations.entity");
const stations_controller_1 = require("./stations.controller");
const stations_service_1 = require("./stations.service");
const station_profile_1 = require("./profile/station.profile");
const kitchens_module_1 = require("../kitchens/kitchens.module");
let StationsModule = class StationsModule {
};
StationsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([stations_entity_1.StationEntity]), kitchens_module_1.KitchenModule],
        controllers: [stations_controller_1.StationsController],
        providers: [stations_service_1.StationsService, station_profile_1.StationProfile],
        exports: [stations_service_1.StationsService],
    })
], StationsModule);
exports.StationsModule = StationsModule;
//# sourceMappingURL=stations.module.js.map