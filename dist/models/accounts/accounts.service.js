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
exports.AccountsService = void 0;
const nestjs_1 = require("@automapper/nestjs");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const base_service_1 = require("../base/base.service");
const account_entity_1 = require("./entities/account.entity");
const bcrypt = require("bcrypt");
const role_enum_1 = require("../../common/enums/role.enum");
let AccountsService = class AccountsService extends base_service_1.BaseService {
    constructor(accountsRepository, mapper) {
        super(accountsRepository);
        this.accountsRepository = accountsRepository;
        this.mapper = mapper;
    }
    async updateRefreshToken(refreshToken, id) {
        return await this.accountsRepository.update({ id: id }, { refreshToken: refreshToken });
    }
    async updateDeviceToken(deviceToken, id) {
        const result = await this.accountsRepository.update({ id: id }, {
            deviceToken: deviceToken,
        });
        return result.affected === 0
            ? 'Update deviceToken fail'
            : 'Update deviceToken success';
    }
    async checkTokne(token) {
        const accountFind = await this.accountsRepository.findOne({
            where: { refreshToken: token },
        });
        if (!accountFind || accountFind == null) {
            throw new common_1.HttpException('token not exist', common_1.HttpStatus.NOT_FOUND);
        }
        return 'token exist';
    }
    async getAccounts(accountFilter, statusFilter) {
        const { role } = accountFilter;
        const { status } = statusFilter;
        const accounts = await this.accountsRepository.find({
            where: {
                role: { name: (0, typeorm_2.Like)(Boolean(role) ? role : '%%') },
                status: (0, typeorm_2.Like)(Boolean(status) ? status : '%%'),
            },
            relations: {
                role: true,
                profile: true,
            },
        });
        if (!accounts || accounts.length == 0) {
            throw new common_1.HttpException(`No account found`, common_1.HttpStatus.NOT_FOUND);
        }
        else {
            return accounts;
        }
    }
    async forgotPassword(user, newPassword) {
        const password = await bcrypt.hash(newPassword, 10);
        user.password = password;
        const account = await this.save(user);
        if (!Boolean(account))
            throw new common_1.HttpException('Change password failed', common_1.HttpStatus.BAD_REQUEST);
        return 'Change password success';
    }
    async changePassword(user, data) {
        const matchPass = await bcrypt.compare(data.oldPassword, user.password);
        if (!matchPass) {
            throw new common_1.HttpException('Your old password is Wrong', common_1.HttpStatus.BAD_REQUEST);
        }
        const newPass = await bcrypt.hash(data.newPassword, 10);
        user.password = newPass;
        const account = await this.save(user);
        if (!Boolean(account))
            throw new common_1.HttpException('Change password failed', common_1.HttpStatus.BAD_REQUEST);
        return 'Change password success';
    }
    async banAccount(id, user) {
        if (id === user.id)
            throw new common_1.HttpException('You can not ban this you', common_1.HttpStatus.BAD_REQUEST);
        const account = await this.accountsRepository.findOne({
            where: { id },
            relations: { role: true },
        });
        if (!Boolean(account))
            throw new common_1.HttpException('this account not found', common_1.HttpStatus.NOT_FOUND);
        account.status = "ban";
        return await this.save(account);
    }
    async unBanAccount(id) {
        const account = await this.accountsRepository.findOne({
            where: { id },
            relations: { role: true },
        });
        if (!Boolean(account))
            throw new common_1.HttpException('this account not found', common_1.HttpStatus.NOT_FOUND);
        account.status = "active";
        return await this.save(account);
    }
    async inActiveAccount(id, user) {
        if (id === user.id)
            throw new common_1.HttpException('You can not delete this you', common_1.HttpStatus.BAD_REQUEST);
        const account = await this.accountsRepository.findOne({
            where: { id },
            relations: { role: true },
        });
        if (!Boolean(account))
            throw new common_1.HttpException('this account not found', common_1.HttpStatus.NOT_FOUND);
        if (account.role.name === role_enum_1.RoleEnum.ADMIN)
            throw new common_1.HttpException('Can not delete admin user', common_1.HttpStatus.BAD_REQUEST);
        account.status = "inActive";
        return await this.save(account);
    }
};
AccountsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(account_entity_1.AccountEntity)),
    __param(1, (0, nestjs_1.InjectMapper)()),
    __metadata("design:paramtypes", [typeorm_2.Repository, Object])
], AccountsService);
exports.AccountsService = AccountsService;
//# sourceMappingURL=accounts.service.js.map