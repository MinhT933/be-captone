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
exports.AuthenticationController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const role_enum_1 = require("../common/enums/role.enum");
const public_decorator_1 = require("../decorators/public.decorator");
const roles_decorator_1 = require("../decorators/roles.decorator");
const user_decorator_1 = require("../decorators/user.decorator");
const account_entity_1 = require("../models/accounts/entities/account.entity");
const auth_service_1 = require("./auth.service");
const login_dto_1 = require("./dto/login.dto");
const refresh_token_dto_1 = require("./dto/refresh-token.dto");
const register_account_dto_1 = require("./dto/register-account.dto");
const register_customer_dto_1 = require("./dto/register-customer.dto");
const register_kitchen_dto_1 = require("./dto/register-kitchen.dto");
const register_shipper_dto_1 = require("./dto/register-shipper.dto");
let AuthenticationController = class AuthenticationController {
    constructor(authService) {
        this.authService = authService;
    }
    async checkExistPhone(phone) {
        return await this.authService.checkPhoneExist(phone);
    }
    async checkExistPhoneShipper(phone) {
        return await this.authService.checkPhoneShipperExist(phone);
    }
    async checkExistPhoneCustomer(phone) {
        return await this.authService.checkPhoneCustomerExist(phone);
    }
    async signUpCustomer(dto) {
        return await this.authService.signUpCustomer(dto);
    }
    async registerShipper(dto) {
        return await this.authService.registerShipper(dto);
    }
    async registerKitchen(dto) {
        return await this.authService.registerKitchen(dto);
    }
    async registerAdmin(dto) {
        return await this.authService.signUpAdmin(dto);
    }
    async registerManager(dto) {
        return await this.authService.signUpManager(dto);
    }
    async login(dto) {
        return await this.authService.loginAll(dto);
    }
    async loginCustomer(dto) {
        return await this.authService.login(dto, role_enum_1.RoleEnum.CUSTOMER);
    }
    async loginShipper(dto) {
        return await this.authService.login(dto, role_enum_1.RoleEnum.SHIPPER);
    }
    async refreshToken(dto) {
        return await this.authService.refreshToken(dto.refresh_token);
    }
    async logout(user) {
        return await this.authService.logout(user);
    }
};
__decorate([
    (0, common_1.Post)('/checkPhone'),
    (0, public_decorator_1.Public)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.CheckPhoneDTO]),
    __metadata("design:returntype", Promise)
], AuthenticationController.prototype, "checkExistPhone", null);
__decorate([
    (0, common_1.Post)('/checkPhone_shipper'),
    (0, public_decorator_1.Public)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.CheckPhoneDTO]),
    __metadata("design:returntype", Promise)
], AuthenticationController.prototype, "checkExistPhoneShipper", null);
__decorate([
    (0, common_1.Post)('/checkPhone_customer'),
    (0, public_decorator_1.Public)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.CheckPhoneDTO]),
    __metadata("design:returntype", Promise)
], AuthenticationController.prototype, "checkExistPhoneCustomer", null);
__decorate([
    (0, common_1.Post)('sign-up/customer'),
    (0, public_decorator_1.Public)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_customer_dto_1.RegisterCustomerDTO]),
    __metadata("design:returntype", Promise)
], AuthenticationController.prototype, "signUpCustomer", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.RoleEnum.ADMIN),
    (0, common_1.Post)('register/shipper'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_shipper_dto_1.RegisterShipperDTO]),
    __metadata("design:returntype", Promise)
], AuthenticationController.prototype, "registerShipper", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.RoleEnum.ADMIN),
    (0, common_1.Post)('register/kitchen'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_kitchen_dto_1.RegisterKitchenDTO]),
    __metadata("design:returntype", Promise)
], AuthenticationController.prototype, "registerKitchen", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.RoleEnum.ADMIN),
    (0, common_1.Post)('register/admin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_account_dto_1.RegisterAccountDTO]),
    __metadata("design:returntype", Promise)
], AuthenticationController.prototype, "registerAdmin", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.RoleEnum.ADMIN),
    (0, common_1.Post)('register/manager'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_account_dto_1.RegisterAccountDTO]),
    __metadata("design:returntype", Promise)
], AuthenticationController.prototype, "registerManager", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, public_decorator_1.Public)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], AuthenticationController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('login/customer'),
    (0, public_decorator_1.Public)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], AuthenticationController.prototype, "loginCustomer", null);
__decorate([
    (0, common_1.Post)('login/shipper'),
    (0, public_decorator_1.Public)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], AuthenticationController.prototype, "loginShipper", null);
__decorate([
    (0, common_1.Post)('refreshToken'),
    (0, public_decorator_1.Public)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [refresh_token_dto_1.RefreshTokenDTO]),
    __metadata("design:returntype", Promise)
], AuthenticationController.prototype, "refreshToken", null);
__decorate([
    (0, common_1.Post)('logout'),
    __param(0, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [account_entity_1.AccountEntity]),
    __metadata("design:returntype", Promise)
], AuthenticationController.prototype, "logout", null);
AuthenticationController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('auths'),
    (0, swagger_1.ApiTags)('auths'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthenticationController);
exports.AuthenticationController = AuthenticationController;
//# sourceMappingURL=auth.controller.js.map