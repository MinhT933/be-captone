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
exports.KitchenService = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const base_service_1 = require("../base/base.service");
const kitchens_entity_1 = require("./entities/kitchens.entity");
const profile_service_1 = require("../profiles/profile.service");
const profile_entity_1 = require("../profiles/entities/profile.entity");
const account_entity_1 = require("../accounts/entities/account.entity");
const accounts_service_1 = require("../accounts/accounts.service");
let KitchenService = class KitchenService extends base_service_1.BaseService {
    constructor(dataSource, kitchensRepository, profileService, accountService) {
        super(kitchensRepository);
        this.dataSource = dataSource;
        this.kitchensRepository = kitchensRepository;
        this.profileService = profileService;
        this.accountService = accountService;
    }
    async findAll() {
        return await this.kitchensRepository.find({
            relations: {
                account: true,
            },
        });
    }
    async getKitchenByStatus(filter) {
        const { status } = filter;
        const list = await this.kitchensRepository.find({
            where: { account: { status: (0, typeorm_1.Like)(Boolean(status) ? status : '%%') } },
            relations: { account: { profile: true }, stations: true },
        });
        if (!list || list.length == 0) {
            throw new common_1.HttpException('No kitchen found', common_1.HttpStatus.NOT_FOUND);
        }
        return list;
    }
    async updateKitchen(id, update) {
        const kitchen = await this.kitchensRepository.findOne({
            where: { id: id },
        });
        if (!kitchen) {
            throw new common_1.HttpException(`Kitchen ${id} not found`, common_1.HttpStatus.NOT_FOUND);
        }
        const checkEmail = await this.profileService.findOne({
            where: { email: update.email },
        });
        if (Boolean(checkEmail) && id != checkEmail.id) {
            throw new common_1.HttpException(`Email ${update.email} existed`, common_1.HttpStatus.BAD_REQUEST);
        }
        const callback = async (entityManager) => {
            await entityManager.update(kitchens_entity_1.KitchenEntity, { id: id }, { address: update.address });
            await entityManager.update(profile_entity_1.ProfileEntity, { id: id }, { fullName: update.fullName, email: update.email });
        };
        await this.profileService.transaction(callback, this.dataSource);
        return await this.kitchensRepository.findOne({
            where: { id: id },
            relations: { account: { profile: true } },
        });
    }
    async updateStatusKitchen(id) {
        const kitchen = await this.kitchensRepository.findOne({
            where: { id: id },
            relations: { account: true },
        });
        if (!kitchen) {
            throw new common_1.HttpException(`Kitchen ${id} not found`, common_1.HttpStatus.NOT_FOUND);
        }
        if (kitchen.account.status == "active") {
            const callback = async (entityManager) => {
                await entityManager.update(account_entity_1.AccountEntity, { id: id }, { status: "inActive" });
            };
            await this.accountService.transaction(callback, this.dataSource);
            return 'Kitchen inactive!';
        }
        else {
            const callback = async (entityManager) => {
                await entityManager.update(account_entity_1.AccountEntity, { id: id }, { status: "active" });
            };
            await this.accountService.transaction(callback, this.dataSource);
            return 'Kitchen active!';
        }
    }
};
KitchenService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_2.InjectRepository)(kitchens_entity_1.KitchenEntity)),
    __metadata("design:paramtypes", [typeorm_1.DataSource,
        typeorm_1.Repository,
        profile_service_1.ProfileService,
        accounts_service_1.AccountsService])
], KitchenService);
exports.KitchenService = KitchenService;
//# sourceMappingURL=kitchens.service.js.map