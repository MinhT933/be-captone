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
exports.FeedBackController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const public_decorator_1 = require("../../decorators/public.decorator");
const create_feedback_dto_1 = require("./dto/create_feedback.dto");
const feedback_entity_1 = require("./entities/feedback.entity");
const feedback_service_1 = require("./feedback.service");
let FeedBackController = class FeedBackController {
    constructor(feedbackService) {
        this.feedbackService = feedbackService;
    }
    async getAllFeedback() {
        return await this.feedbackService.getAllFeedback();
    }
    async createFeedback(feedback) {
        return await this.feedbackService.createFeedBack(feedback);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, public_decorator_1.Public)(),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'GET ALL FEEDBACK',
        type: feedback_entity_1.FeedBackEntity,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FeedBackController.prototype, "getAllFeedback", null);
__decorate([
    (0, common_1.Post)(),
    (0, public_decorator_1.Public)(),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'CREATE FEEDBACK',
        type: String,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_feedback_dto_1.CreateFeedbackDTO]),
    __metadata("design:returntype", Promise)
], FeedBackController.prototype, "createFeedback", null);
FeedBackController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('feedback'),
    (0, common_1.Controller)('feedback'),
    __metadata("design:paramtypes", [feedback_service_1.FeedBackService])
], FeedBackController);
exports.FeedBackController = FeedBackController;
//# sourceMappingURL=feedback.controller.js.map