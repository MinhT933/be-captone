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
exports.FeedBackService = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const base_service_1 = require("../base/base.service");
const nestjs_1 = require("@automapper/nestjs");
const feedback_entity_1 = require("./entities/feedback.entity");
const subscriptions_service_1 = require("../subscriptions/subscriptions.service");
const sub_enum_1 = require("../../common/enums/sub.enum");
let FeedBackService = class FeedBackService extends base_service_1.BaseService {
    constructor(feedbackRepository, mapper, subscriptionService) {
        super(feedbackRepository);
        this.feedbackRepository = feedbackRepository;
        this.mapper = mapper;
        this.subscriptionService = subscriptionService;
    }
    async createFeedBack(dto) {
        const subFind = await this.subscriptionService.findOne({
            where: { id: dto.subId },
        });
        if (!subFind)
            throw new common_1.HttpException('Sub not found', common_1.HttpStatus.NOT_FOUND);
        const newFeedback = await this.feedbackRepository.save({
            packageRate: dto.packageRate,
            deliveryRate: dto.deliveryRate,
            comment: dto.comment,
            subscription: subFind,
        });
        if (newFeedback) {
            subFind.status = sub_enum_1.SubEnum.DONE;
            await this.subscriptionService.save(subFind);
            return 'Send feedback success';
        }
        else {
            return 'Send feedback fail';
        }
    }
    async getAllFeedback() {
        const list = await this.feedbackRepository.find({});
        if (!list || list.length == 0) {
            throw new common_1.HttpException('No feedback found', common_1.HttpStatus.NOT_FOUND);
        }
        return list;
    }
};
FeedBackService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(feedback_entity_1.FeedBackEntity)),
    __param(1, (0, nestjs_1.InjectMapper)()),
    __metadata("design:paramtypes", [typeorm_1.Repository, Object, subscriptions_service_1.SubscriptionService])
], FeedBackService);
exports.FeedBackService = FeedBackService;
//# sourceMappingURL=feedback.service.js.map