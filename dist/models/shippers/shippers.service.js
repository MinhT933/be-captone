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
exports.ShippersService = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const base_service_1 = require("../base/base.service");
const shipper_entity_1 = require("./entities/shipper.entity");
const profile_service_1 = require("../profiles/profile.service");
const accounts_service_1 = require("../accounts/accounts.service");
const profile_entity_1 = require("../profiles/entities/profile.entity");
const account_entity_1 = require("../accounts/entities/account.entity");
const shipperStatus_enum_1 = require("../../common/enums/shipperStatus.enum");
const kitchens_service_1 = require("../kitchens/kitchens.service");
const accountStatus_enum_1 = require("../../common/enums/accountStatus.enum");
let ShippersService = class ShippersService extends base_service_1.BaseService {
    constructor(dataSource, shipperRepository, profileService, accountService, kitchenService) {
        super(shipperRepository);
        this.dataSource = dataSource;
        this.shipperRepository = shipperRepository;
        this.profileService = profileService;
        this.accountService = accountService;
        this.kitchenService = kitchenService;
    }
    async findAll(statusFilter) {
        const { status } = statusFilter;
        return await this.shipperRepository.find({
            where: { status: (0, typeorm_1.Like)(Boolean(status) ? status : '%%') },
            relations: {
                account: { profile: true },
                kitchen: true,
            },
        });
    }
    async getShipperByStatus(filter) {
        const { statusAcc } = filter;
        const list = await this.shipperRepository.find({
            where: {
                account: { status: (0, typeorm_1.Like)(Boolean(statusAcc) ? statusAcc : '%%') },
            },
            relations: {
                account: { profile: true },
                kitchen: { account: { profile: true } },
            },
        });
        if (!list || list.length == 0) {
            throw new common_1.HttpException('No shipper found', common_1.HttpStatus.NOT_FOUND);
        }
        return list;
    }
    async getFreeShipper() {
        const listFree = [];
        const listShipper = await this.shipperRepository.find({
            relations: {
                account: { profile: true },
                kitchen: true,
            },
            where: {
                status: shipperStatus_enum_1.ShipperStatusEnum.ACTIVE,
                account: { status: accountStatus_enum_1.AccountStatusEnum.ACTIVE },
            },
        });
        if (!listShipper || listShipper.length == 0)
            throw new common_1.HttpException('No shipper free', common_1.HttpStatus.NOT_FOUND);
        for (const item of listShipper) {
            if (item.kitchen == null) {
                listFree.push(item);
            }
        }
        return listFree;
    }
    async updateShipper(id, update) {
        const shipper = await this.shipperRepository.findOne({
            where: { id: update.id },
        });
        if (!shipper) {
            throw new common_1.HttpException(`Shipper id ${update.id} not found`, common_1.HttpStatus.NOT_FOUND);
        }
        const checkNoPlate = await this.shipperRepository.findOne({
            where: { noPlate: update.noPlate },
        });
        if (Boolean(checkNoPlate) && id != checkNoPlate.id) {
            throw new common_1.HttpException('noPlate already exists', common_1.HttpStatus.BAD_REQUEST);
        }
        const checkEmail = await this.profileService.findOne({
            where: { email: update.email },
        });
        if (Boolean(checkEmail) && id != checkEmail.id) {
            throw new common_1.HttpException('Email already exists', common_1.HttpStatus.BAD_REQUEST);
        }
        const kitchenFind = await this.kitchenService.findOne({
            where: { id: update.kitchenId },
        });
        if (!kitchenFind || kitchenFind == null)
            throw new common_1.HttpException('Kitchen not found!', common_1.HttpStatus.NOT_FOUND);
        const callback = async (entityManager) => {
            await entityManager.update(shipper_entity_1.ShipperEntity, { id: id }, {
                noPlate: update.noPlate,
                vehicleType: update.vehicleType,
                kitchen: kitchenFind,
            });
            await entityManager.update(profile_entity_1.ProfileEntity, { id: id }, { fullName: update.fullName, email: update.email, DOB: update.DOB });
        };
        await this.accountService.transaction(callback, this.dataSource);
        return this.shipperRepository.findOne({
            where: { id: id },
            relations: { account: { profile: true } },
        });
    }
    async updateStatusShipper(id) {
        const shipper = await this.shipperRepository.findOne({
            where: { id: id },
            relations: { account: true },
        });
        if (!shipper) {
            throw new common_1.HttpException(`Shipper ${id} not found`, common_1.HttpStatus.NOT_FOUND);
        }
        if (shipper.account.status == "active") {
            const callback = async (entityManager) => {
                await entityManager.update(shipper_entity_1.ShipperEntity, { id: id }, { status: "inActive" });
                await entityManager.update(account_entity_1.AccountEntity, { id: id }, { status: "ban" });
            };
            await this.accountService.transaction(callback, this.dataSource);
            return 'Shipper inactive!';
        }
        else if (shipper.account.status == "ban") {
            const callback = async (entityManager) => {
                await entityManager.update(shipper_entity_1.ShipperEntity, { id: id }, { status: "active" });
                await entityManager.update(account_entity_1.AccountEntity, { id: id }, { status: "active" });
            };
            await this.accountService.transaction(callback, this.dataSource);
            return 'Shipper active!';
        }
    }
    async offByShipper(user) {
        const sfind = await this.shipperRepository.findOne({
            where: { id: user.id },
        });
        if (!sfind) {
            throw new common_1.HttpException('Shipper not found', common_1.HttpStatus.NOT_FOUND);
        }
        if (sfind.status == shipperStatus_enum_1.ShipperStatusEnum.ACTIVE) {
            const update = await this.shipperRepository.update({ id: user.id }, { status: shipperStatus_enum_1.ShipperStatusEnum.IN_ACTIVE });
            if (update) {
                return 'Shipper inactive';
            }
            else {
                return 'error to inactive';
            }
        }
        else if (sfind.status == shipperStatus_enum_1.ShipperStatusEnum.IN_ACTIVE) {
            const update = await this.shipperRepository.update({ id: user.id }, { status: shipperStatus_enum_1.ShipperStatusEnum.ACTIVE });
            if (update) {
                return 'Shipper active';
            }
            else {
                return 'error to active';
            }
        }
    }
    async getShipperByKitchen(filter) {
        const { status } = filter;
        const kitchenFind = await this.kitchenService.findOne({
            where: { id: filter.kitchenId },
        });
        if (kitchenFind == null)
            throw new common_1.HttpException('Kitchen not found', common_1.HttpStatus.NOT_FOUND);
        const listShipper = await this.shipperRepository.find({
            where: {
                kitchen: { id: filter.kitchenId },
                status: (0, typeorm_1.Like)(Boolean(status) ? status : '%%'),
            },
            relations: {
                account: { profile: true },
                deliveryTrips: true,
            },
        });
        if (listShipper.length == 0)
            throw new common_1.HttpException('No shipper found', common_1.HttpStatus.NOT_FOUND);
        return listShipper;
    }
    async addShipperToKitchen(dto) {
        const kitchenFind = await this.kitchenService.findOne({
            where: { id: dto.kitchenId },
            relations: { account: true },
        });
        if (kitchenFind == null)
            throw new common_1.HttpException('Kitchen not found', common_1.HttpStatus.NOT_FOUND);
        else if (kitchenFind.account.status !== accountStatus_enum_1.AccountStatusEnum.ACTIVE)
            throw new common_1.HttpException('Only add shipper to active kitchen', common_1.HttpStatus.BAD_REQUEST);
        if (dto.shippers.length <= 0)
            throw new common_1.HttpException('List shipper is null', common_1.HttpStatus.BAD_REQUEST);
        for (const shipper of dto.shippers) {
            const shipperFind = await this.shipperRepository.findOne({
                where: { id: shipper },
                relations: { account: { profile: true } },
            });
            if (!shipperFind || shipperFind == null)
                throw new common_1.HttpException(`Shipper ${shipper} not found`, common_1.HttpStatus.NOT_FOUND);
            if (shipperFind.status !== shipperStatus_enum_1.ShipperStatusEnum.ACTIVE)
                throw new common_1.HttpException(`Only add active shipper (Error at: ${shipper})`, common_1.HttpStatus.BAD_REQUEST);
            if (shipperFind.account.status !== accountStatus_enum_1.AccountStatusEnum.ACTIVE)
                throw new common_1.HttpException(`Only add active account shipper (Error at: ${shipper})`, common_1.HttpStatus.BAD_REQUEST);
            const addShipper = await this.shipperRepository.update({
                id: shipperFind.id,
            }, {
                kitchen: kitchenFind,
            });
            if (!addShipper)
                throw new common_1.HttpException(`Add shipper fail`, common_1.HttpStatus.BAD_REQUEST);
        }
        return 'Add successful';
    }
};
ShippersService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_2.InjectRepository)(shipper_entity_1.ShipperEntity)),
    __metadata("design:paramtypes", [typeorm_1.DataSource,
        typeorm_1.Repository,
        profile_service_1.ProfileService,
        accounts_service_1.AccountsService,
        kitchens_service_1.KitchenService])
], ShippersService);
exports.ShippersService = ShippersService;
//# sourceMappingURL=shippers.service.js.map