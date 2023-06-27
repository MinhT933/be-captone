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
exports.TimeSlotsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const time_slots_service_1 = require("./time-slots.service");
const time_slot_dto_1 = require("./dto/time-slot.dto");
const time_slots_entity_1 = require("./entities/time-slots.entity");
const nestjs_1 = require("@automapper/nestjs");
let TimeSlotsController = class TimeSlotsController {
    constructor(timeSlotsService) {
        this.timeSlotsService = timeSlotsService;
    }
    async findAll() {
        const listTimeSlots = await this.timeSlotsService.query();
        if (!listTimeSlots || listTimeSlots.length == 0) {
            throw new common_1.HttpException('No data time slot', common_1.HttpStatus.NOT_FOUND);
        }
        return listTimeSlots;
    }
    async getTimeSlotFlag(flag) {
        const listTimeSlotFlag = await this.timeSlotsService.query({
            where: { flag: flag },
        });
        if (!listTimeSlotFlag || listTimeSlotFlag.length == 0) {
            throw new common_1.HttpException("Don't have resource Time-slot", common_1.HttpStatus.NOT_FOUND);
        }
        return listTimeSlotFlag;
    }
    async finById(id) {
        const timeSlot = await this.timeSlotsService.findOne({
            where: { id: id },
        });
        if (!timeSlot) {
            throw new common_1.HttpException("Don't have resource Time-slot", common_1.HttpStatus.NOT_FOUND);
        }
        return timeSlot;
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'GET ALL TIME SLOT',
        type: [time_slot_dto_1.TimeSlotDTO],
    }),
    (0, common_1.UseInterceptors)((0, nestjs_1.MapInterceptor)(time_slots_entity_1.TimeSlotEntity, time_slot_dto_1.TimeSlotDTO, { isArray: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TimeSlotsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/:flag'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'GET ALL TIME SLOT FOLLOW FLAG',
        type: [time_slot_dto_1.TimeSlotDTO],
    }),
    (0, common_1.UseInterceptors)((0, nestjs_1.MapInterceptor)(time_slots_entity_1.TimeSlotEntity, time_slot_dto_1.TimeSlotDTO, { isArray: true })),
    __param(0, (0, common_1.Param)('flag')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TimeSlotsController.prototype, "getTimeSlotFlag", null);
__decorate([
    (0, common_1.Get)('find-by-id/:id'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'GET TIME SLOT By ID',
        type: time_slot_dto_1.TimeSlotDTO,
    }),
    (0, common_1.UseInterceptors)((0, nestjs_1.MapInterceptor)(time_slots_entity_1.TimeSlotEntity, time_slot_dto_1.TimeSlotDTO)),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TimeSlotsController.prototype, "finById", null);
TimeSlotsController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('time-slots'),
    (0, common_1.Controller)('time-slots'),
    __metadata("design:paramtypes", [time_slots_service_1.TimeSlotsService])
], TimeSlotsController);
exports.TimeSlotsController = TimeSlotsController;
//# sourceMappingURL=time-slots.controller.js.map