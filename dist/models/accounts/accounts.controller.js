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
exports.AccountsController = void 0;
const nestjs_1 = require("@automapper/nestjs");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const role_enum_1 = require("../../common/enums/role.enum");
const roles_decorator_1 = require("../../decorators/roles.decorator");
const user_decorator_1 = require("../../decorators/user.decorator");
const accounts_service_1 = require("./accounts.service");
const account_filter_dto_1 = require("./dto/account-filter.dto");
const account_info__dto_1 = require("./dto/account-info..dto");
const forgotPassword_dto_1 = require("./dto/forgotPassword.dto");
const deviceToken_dto_1 = require("./dto/deviceToken.dto");
const account_entity_1 = require("./entities/account.entity");
const changePassword_dto_1 = require("./dto/changePassword.dto");
const public_decorator_1 = require("../../decorators/public.decorator");
let AccountsController = class AccountsController {
    constructor(accountsService) {
        this.accountsService = accountsService;
    }
    async getUserById(id) {
        const accounts = await this.accountsService.findOne({
            where: { id: id },
            relations: {
                role: true,
                profile: true,
                shipper: true,
                kitchen: true,
            },
        });
        if (!accounts)
            throw new common_1.HttpException("Don't have resource", common_1.HttpStatus.NOT_FOUND);
        return accounts;
    }
    async getMe(user) {
        return await this.accountsService.findOne({
            where: { id: user.id },
            relations: {
                profile: true,
                role: true,
                shipper: { kitchen: { account: { profile: true } } },
                kitchen: true,
            },
        });
    }
    async checkToken(tokenFilter) {
        return await this.accountsService.checkTokne(tokenFilter.token);
    }
    async getAll(accountFilter, statusFilter) {
        return await this.accountsService.getAccounts(accountFilter, statusFilter);
    }
    async updateDeviceToken(user, body) {
        return await this.accountsService.updateDeviceToken(body.deviceToken, user.id);
    }
    async forgotPassword(user, dto) {
        return await this.accountsService.forgotPassword(user, dto.password);
    }
    async changePassword(user, dto) {
        return await this.accountsService.changePassword(user, dto);
    }
    async banAccount(id, user) {
        return await this.accountsService.banAccount(id, user);
    }
    async unBanAccount(id) {
        return await this.accountsService.unBanAccount(id);
    }
    async deleteAccount(id, user) {
        return await this.accountsService.inActiveAccount(id, user);
    }
};
__decorate([
    (0, common_1.Get)('/find/:id'),
    (0, common_1.UseInterceptors)((0, nestjs_1.MapInterceptor)(account_entity_1.AccountEntity, account_info__dto_1.AccountInfoDTO)),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AccountsController.prototype, "getUserById", null);
__decorate([
    (0, common_1.Get)('/me'),
    (0, common_1.UseInterceptors)((0, nestjs_1.MapInterceptor)(account_entity_1.AccountEntity, account_info__dto_1.AccountInfoDTO)),
    __param(0, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [account_entity_1.AccountEntity]),
    __metadata("design:returntype", Promise)
], AccountsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Post)('/checkToken'),
    (0, public_decorator_1.Public)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [deviceToken_dto_1.CheckToken]),
    __metadata("design:returntype", Promise)
], AccountsController.prototype, "checkToken", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(role_enum_1.RoleEnum.ADMIN),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [account_filter_dto_1.AccountFilterDTO,
        account_filter_dto_1.AccountStatusFilter]),
    __metadata("design:returntype", Promise)
], AccountsController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)('/deviceToken'),
    __param(0, (0, user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [account_entity_1.AccountEntity,
        deviceToken_dto_1.DeviceTokenDTO]),
    __metadata("design:returntype", Promise)
], AccountsController.prototype, "updateDeviceToken", null);
__decorate([
    (0, common_1.Put)('/forgotPassword'),
    __param(0, (0, user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [account_entity_1.AccountEntity,
        forgotPassword_dto_1.ForgotPasswordDTO]),
    __metadata("design:returntype", Promise)
], AccountsController.prototype, "forgotPassword", null);
__decorate([
    (0, common_1.Put)('/changePassword'),
    __param(0, (0, user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [account_entity_1.AccountEntity,
        changePassword_dto_1.ChangePasswordDTO]),
    __metadata("design:returntype", Promise)
], AccountsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Put)('/ban/:id'),
    (0, roles_decorator_1.Roles)(role_enum_1.RoleEnum.ADMIN),
    (0, common_1.UseInterceptors)((0, nestjs_1.MapInterceptor)(account_entity_1.AccountEntity, account_info__dto_1.AccountInfoDTO)),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, account_entity_1.AccountEntity]),
    __metadata("design:returntype", Promise)
], AccountsController.prototype, "banAccount", null);
__decorate([
    (0, common_1.Put)('/unBan/:id'),
    (0, roles_decorator_1.Roles)(role_enum_1.RoleEnum.ADMIN),
    (0, common_1.UseInterceptors)((0, nestjs_1.MapInterceptor)(account_entity_1.AccountEntity, account_info__dto_1.AccountInfoDTO)),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AccountsController.prototype, "unBanAccount", null);
__decorate([
    (0, common_1.Put)('inActive/:id'),
    (0, roles_decorator_1.Roles)(role_enum_1.RoleEnum.ADMIN),
    (0, common_1.UseInterceptors)((0, nestjs_1.MapInterceptor)(account_entity_1.AccountEntity, account_info__dto_1.AccountInfoDTO)),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, account_entity_1.AccountEntity]),
    __metadata("design:returntype", Promise)
], AccountsController.prototype, "deleteAccount", null);
AccountsController = __decorate([
    (0, common_1.Controller)('accounts'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('accounts'),
    __metadata("design:paramtypes", [accounts_service_1.AccountsService])
], AccountsController);
exports.AccountsController = AccountsController;
//# sourceMappingURL=accounts.controller.js.map