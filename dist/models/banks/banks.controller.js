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
exports.BanksController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const banks_service_1 = require("./banks.service");
const bank_entity_1 = require("./entities/bank.entity");
const public_decorator_1 = require("../../decorators/public.decorator");
const nestjs_1 = require("@automapper/nestjs");
const bank_dto_1 = require("./dto/bank.dto");
let BanksController = class BanksController {
    constructor(banksService) {
        this.banksService = banksService;
    }
    async getBanks() {
        return this.banksService.query();
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, public_decorator_1.Public)(),
    (0, common_1.UseInterceptors)((0, nestjs_1.MapInterceptor)(bank_entity_1.BankEntity, bank_dto_1.BankDto, { isArray: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BanksController.prototype, "getBanks", null);
BanksController = __decorate([
    (0, common_1.Controller)('banks'),
    (0, swagger_1.ApiTags)('banks'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [banks_service_1.BanksService])
], BanksController);
exports.BanksController = BanksController;
//# sourceMappingURL=banks.controller.js.map