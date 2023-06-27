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
exports.BatchController = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const batch_service_1 = require("./batch.service");
const batch_entity_1 = require("./entities/batch.entity");
const public_decorator_1 = require("../../decorators/public.decorator");
let BatchController = class BatchController {
    constructor(batchService) {
        this.batchService = batchService;
    }
    async getBatchById(id) {
        return await this.batchService.getBatchById(id);
    }
    async updateStatusBatch(id) {
        return await this.batchService.updateStatusBatch(id);
    }
};
__decorate([
    (0, common_1.Get)('/byId/:id'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'GET BATCH BY ID',
        type: batch_entity_1.BatchEntity,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BatchController.prototype, "getBatchById", null);
__decorate([
    (0, common_1.Put)('/update_status/:id'),
    (0, public_decorator_1.Public)(),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'UPDATE STATUS BATCH BY ID',
        type: String,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BatchController.prototype, "updateStatusBatch", null);
BatchController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('batchs'),
    (0, common_1.Controller)('batchs'),
    __metadata("design:paramtypes", [batch_service_1.BatchService])
], BatchController);
exports.BatchController = BatchController;
//# sourceMappingURL=batch.controller.js.map