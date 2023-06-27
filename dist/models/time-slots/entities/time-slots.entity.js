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
exports.TimeSlotEntity = void 0;
const classes_1 = require("@automapper/classes");
const base_entity_1 = require("../../base/base.entity");
const sessions_entity_1 = require("../../sessions/entities/sessions.entity");
const typeorm_1 = require("typeorm");
let TimeSlotEntity = class TimeSlotEntity extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)('time'),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Date)
], TimeSlotEntity.prototype, "startTime", void 0);
__decorate([
    (0, typeorm_1.Column)('time'),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Date)
], TimeSlotEntity.prototype, "endTime", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Number)
], TimeSlotEntity.prototype, "flag", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => sessions_entity_1.SessionEntity, (sessions) => sessions.timeSlot),
    __metadata("design:type", Array)
], TimeSlotEntity.prototype, "sessions", void 0);
TimeSlotEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'time_slots' })
], TimeSlotEntity);
exports.TimeSlotEntity = TimeSlotEntity;
//# sourceMappingURL=time-slots.entity.js.map