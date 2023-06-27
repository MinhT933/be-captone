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
exports.SessionControler = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const public_decorator_1 = require("../../decorators/public.decorator");
const user_decorator_1 = require("../../decorators/user.decorator");
const account_entity_1 = require("../accounts/entities/account.entity");
const createSession_dto_1 = require("./dto/createSession.dto");
const session_filter_dto_1 = require("./dto/session_filter.dto");
const sessions_entity_1 = require("./entities/sessions.entity");
const sessions_service_1 = require("./sessions.service");
let SessionControler = class SessionControler {
    constructor(sessionService) {
        this.sessionService = sessionService;
    }
    async kitchenGetSessionByDate(user, filter) {
        return await this.sessionService.getAllSessionByKitchen(user, filter);
    }
    async getSessionDetail(id) {
        return await this.sessionService.getSessionDetail(id);
    }
    async createSession(dto) {
        return await this.sessionService.createSession(dto);
    }
    async doneSession(id) {
        return await this.sessionService.doneSession(id);
    }
};
__decorate([
    (0, common_1.Get)('/byKitchen'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'KITCHEN GET SESSION BY WORK DATE',
        type: [sessions_entity_1.SessionEntity],
    }),
    __param(0, (0, user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [account_entity_1.AccountEntity,
        session_filter_dto_1.SessionByDate]),
    __metadata("design:returntype", Promise)
], SessionControler.prototype, "kitchenGetSessionByDate", null);
__decorate([
    (0, common_1.Get)('/detail/:id'),
    (0, public_decorator_1.Public)(),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'GET SESSION DETAIL',
        type: sessions_entity_1.SessionEntity,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SessionControler.prototype, "getSessionDetail", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'CREATE SESSION',
        type: sessions_entity_1.SessionEntity,
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createSession_dto_1.CreateSessionDTO]),
    __metadata("design:returntype", Promise)
], SessionControler.prototype, "createSession", null);
__decorate([
    (0, common_1.Put)('/done_session/:id'),
    (0, public_decorator_1.Public)(),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'DONE SESSION',
        type: sessions_entity_1.SessionEntity,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SessionControler.prototype, "doneSession", null);
SessionControler = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('sessions'),
    (0, common_1.Controller)('sessions'),
    __metadata("design:paramtypes", [sessions_service_1.SessionService])
], SessionControler);
exports.SessionControler = SessionControler;
//# sourceMappingURL=sessions.controller.js.map