"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeSlotsSeederModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const time_slots_entity_1 = require("../../../models/time-slots/entities/time-slots.entity");
const time_slots_service_1 = require("./time-slots.service");
let TimeSlotsSeederModule = class TimeSlotsSeederModule {
};
TimeSlotsSeederModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([time_slots_entity_1.TimeSlotEntity])],
        providers: [time_slots_service_1.TimeSlotsSeederService],
        exports: [time_slots_service_1.TimeSlotsSeederService],
    })
], TimeSlotsSeederModule);
exports.TimeSlotsSeederModule = TimeSlotsSeederModule;
//# sourceMappingURL=time-slots.module.js.map