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
exports.KitchenFilterSession = exports.SessionByDate = exports.SessionFilterDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const session_enum_1 = require("../../../common/enums/session.enum");
class SessionFilterDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SessionFilterDTO.prototype, "kitchenId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: new Date().toISOString().slice(0, 10) }),
    __metadata("design:type", Date)
], SessionFilterDTO.prototype, "workDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: session_enum_1.SessionEnum,
        default: session_enum_1.SessionEnum.WAITING,
        required: false,
        description: 'Session status',
    }),
    __metadata("design:type", String)
], SessionFilterDTO.prototype, "status", void 0);
exports.SessionFilterDTO = SessionFilterDTO;
class SessionByDate {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: new Date().toISOString().slice(0, 10) }),
    __metadata("design:type", Date)
], SessionByDate.prototype, "workDate", void 0);
exports.SessionByDate = SessionByDate;
class KitchenFilterSession {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], KitchenFilterSession.prototype, "timeSlotId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: new Date().toISOString().slice(0, 10) }),
    __metadata("design:type", Date)
], KitchenFilterSession.prototype, "workDate", void 0);
exports.KitchenFilterSession = KitchenFilterSession;
//# sourceMappingURL=session_filter.dto.js.map