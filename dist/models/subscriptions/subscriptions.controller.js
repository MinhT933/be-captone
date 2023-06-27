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
exports.SubscriptionController = void 0;
const nestjs_1 = require("@automapper/nestjs");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const role_enum_1 = require("../../common/enums/role.enum");
const public_decorator_1 = require("../../decorators/public.decorator");
const roles_decorator_1 = require("../../decorators/roles.decorator");
const user_decorator_1 = require("../../decorators/user.decorator");
const vnpay_dto_1 = require("../../providers/vnpay/vnpay.dto");
const account_entity_1 = require("../accounts/entities/account.entity");
const create_subscription_1 = require("./dto/create-subscription");
const subscription_filter_dto_1 = require("./dto/subscription-filter.dto");
const subscription_dto_1 = require("./dto/subscription.dto");
const subscription_entity_1 = require("./entities/subscription.entity");
const subscriptions_service_1 = require("./subscriptions.service");
let SubscriptionController = class SubscriptionController {
    constructor(subscriptionService) {
        this.subscriptionService = subscriptionService;
    }
    async getAllSubscription() {
        const listSub = await this.subscriptionService.getAllSubscription();
        if (!listSub || listSub.length == 0) {
            throw new common_1.HttpException("Don't have resource Sub", common_1.HttpStatus.NOT_FOUND);
        }
        return listSub;
    }
    async getSubscriptionByStatus(subFilter) {
        return await this.subscriptionService.getSubscriptionByStatus(subFilter);
    }
    async getSubscriptionByCutomer(subFilter, user) {
        const listSub = await this.subscriptionService.getSubscriptionByCustomer(subFilter, user);
        if (!listSub || listSub.length == 0) {
            throw new common_1.HttpException("Don't have resource Sub", common_1.HttpStatus.NOT_FOUND);
        }
        return listSub;
    }
    async findById(id) {
        return this.subscriptionService.findById(id);
    }
    async cusFindSubById(id) {
        return this.subscriptionService.cusFindSubById(id);
    }
    async orderPackage(dto, user) {
        return await this.subscriptionService.subscriptionPackage(dto, user);
    }
    async customerConfirm(id, user) {
        return await this.subscriptionService.customerConfirm(id, user);
    }
    async doneSub(id, user) {
        return await this.subscriptionService.doneSub(id, user);
    }
    async paymentUrl(req, id, bankId) {
        const ip = req.header('x-forwarded-for') ||
            req.connection.remoteAddress ||
            req.socket.remoteAddress;
        return await this.subscriptionService.getPaymentUrl(ip, bankId, id);
    }
    async payment(vnpayDto) {
        try {
            const result = await this.subscriptionService.payment(vnpayDto);
            return result.code === '00'
                ? Object.assign(Object.assign({}, result), { isSuccess: true }) : Object.assign(Object.assign({}, result), { isSuccess: false });
        }
        catch (error) {
            return error;
        }
    }
    async delSub(id, user) {
        return await this.subscriptionService.deleteSubscription(id, user);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'GET ALL SUB',
        type: [subscription_dto_1.SubscriptionDTO],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "getAllSubscription", null);
__decorate([
    (0, common_1.Get)('/getSubByStatus'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'GET SUBSCRIPTION BY STATUS',
        type: [subscription_entity_1.SubscriptionEntity],
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [subscription_filter_dto_1.SubscriptionFilter]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "getSubscriptionByStatus", null);
__decorate([
    (0, common_1.Get)('/customer/getSubscription'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'CUSTOMER GET SUBSCRIPTION BY STATUS',
        type: [subscription_dto_1.SubscriptionDTO],
    }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [subscription_filter_dto_1.SubscriptionFilter,
        account_entity_1.AccountEntity]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "getSubscriptionByCutomer", null);
__decorate([
    (0, common_1.Get)('/:id'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'GET SUB BY ID',
        type: subscription_dto_1.SubscriptionDTO,
    }),
    (0, common_1.UseInterceptors)((0, nestjs_1.MapInterceptor)(subscription_entity_1.SubscriptionEntity, subscription_dto_1.SubscriptionDTO)),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "findById", null);
__decorate([
    (0, common_1.Get)('/byCustomer/:id'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'CUSTOMER GET SUB BY ID',
        type: subscription_dto_1.SubscriptionDTO,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "cusFindSubById", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(role_enum_1.RoleEnum.CUSTOMER),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'CREATE SUB',
        type: subscription_dto_1.SubscriptionDTO,
    }),
    (0, common_1.UseInterceptors)((0, nestjs_1.MapInterceptor)(subscription_entity_1.SubscriptionEntity, subscription_dto_1.SubscriptionDTO)),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_subscription_1.CreateSubscriptionDTO,
        account_entity_1.AccountEntity]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "orderPackage", null);
__decorate([
    (0, common_1.Put)('/confirm/:id'),
    (0, roles_decorator_1.Roles)(role_enum_1.RoleEnum.CUSTOMER),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'CONFIRM SUB',
        type: String,
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, account_entity_1.AccountEntity]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "customerConfirm", null);
__decorate([
    (0, common_1.Put)('/done/:id'),
    (0, roles_decorator_1.Roles)(role_enum_1.RoleEnum.CUSTOMER),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'DONE SUB',
        type: String,
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, account_entity_1.AccountEntity]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "doneSub", null);
__decorate([
    (0, common_1.Get)('/:id/payment-url'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Query)('bankId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "paymentUrl", null);
__decorate([
    (0, common_1.Get)('/payment'),
    (0, public_decorator_1.Public)(),
    (0, common_1.Render)('index'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [vnpay_dto_1.VnpayDto]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "payment", null);
__decorate([
    (0, common_1.Delete)('/delete/:id'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'CUSTOMER DELETE SUBSCRIPTION',
        type: String,
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, account_entity_1.AccountEntity]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "delSub", null);
SubscriptionController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('subscriptions'),
    (0, swagger_1.ApiTags)('subscriptions'),
    __metadata("design:paramtypes", [subscriptions_service_1.SubscriptionService])
], SubscriptionController);
exports.SubscriptionController = SubscriptionController;
//# sourceMappingURL=subscriptions.controller.js.map