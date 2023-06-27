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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const role_enum_1 = require("../common/enums/role.enum");
const shipperStatus_enum_1 = require("../common/enums/shipperStatus.enum");
const config_service_1 = require("../config/jwt/config.service");
const accounts_service_1 = require("../models/accounts/accounts.service");
const account_entity_1 = require("../models/accounts/entities/account.entity");
const kitchens_entity_1 = require("../models/kitchens/entities/kitchens.entity");
const kitchens_service_1 = require("../models/kitchens/kitchens.service");
const profile_entity_1 = require("../models/profiles/entities/profile.entity");
const profile_service_1 = require("../models/profiles/profile.service");
const role_entity_1 = require("../models/roles/entities/role.entity");
const roles_service_1 = require("../models/roles/roles.service");
const shipper_entity_1 = require("../models/shippers/entities/shipper.entity");
const shippers_service_1 = require("../models/shippers/shippers.service");
const shared_service_1 = require("../shared/shared.service");
const typeorm_1 = require("typeorm");
let AuthService = class AuthService {
    constructor(dataSource, accountsService, profileService, rolesService, shipperService, jwtService, jwtConfigService, kitchenService, sharedService) {
        this.dataSource = dataSource;
        this.accountsService = accountsService;
        this.profileService = profileService;
        this.rolesService = rolesService;
        this.shipperService = shipperService;
        this.jwtService = jwtService;
        this.jwtConfigService = jwtConfigService;
        this.kitchenService = kitchenService;
        this.sharedService = sharedService;
    }
    async signUpCustomer(register) {
        const account = await this.accountsService.findOne({
            where: { phone: register.phone },
        });
        if (account) {
            throw new common_1.HttpException('Account already exists', common_1.HttpStatus.BAD_REQUEST);
        }
        const emailFind = await this.profileService.findOne({
            where: { email: register.email },
        });
        if (emailFind) {
            throw new common_1.HttpException('Email existed', common_1.HttpStatus.BAD_REQUEST);
        }
        register.password = await bcrypt.hash(register.password, 10);
        const callback = async (entityManager) => {
            const role = await entityManager.findOne(role_entity_1.RoleEntity, {
                where: { name: role_enum_1.RoleEnum.CUSTOMER },
            });
            const accountEntity = await entityManager.save(account_entity_1.AccountEntity, entityManager.create(account_entity_1.AccountEntity, Object.assign(Object.assign({}, register), { role })));
            await entityManager.save(profile_entity_1.ProfileEntity, entityManager.create(profile_entity_1.ProfileEntity, Object.assign({ account: accountEntity, avatar: 'https://firebasestorage.googleapis.com/v0/b/meal-subcription-plan.appspot.com/o/default_avatar.png?alt=media&token=5623e4d3-4139-4fb8-abd0-eea54c02cc83' }, register)));
        };
        await this.accountsService.transaction(callback, this.dataSource);
        return this.accountsService.findOne({
            relations: { role: true, profile: true },
            where: { phone: register.phone },
        });
    }
    async registerShipper(register) {
        const account = await this.accountsService.findOne({
            where: { phone: register.phone },
        });
        if (Boolean(account)) {
            throw new common_1.HttpException('Account already exists', common_1.HttpStatus.BAD_REQUEST);
        }
        const checkEmail = await this.profileService.findOne({
            where: { email: register.email },
        });
        if (Boolean(checkEmail)) {
            throw new common_1.HttpException('Email already exists', common_1.HttpStatus.BAD_REQUEST);
        }
        const checkNoPlate = await this.shipperService.findOne({
            where: { noPlate: register.noPlate },
        });
        if (Boolean(checkNoPlate)) {
            throw new common_1.HttpException('noPlate already exists', common_1.HttpStatus.BAD_REQUEST);
        }
        const kitchenFind = await this.kitchenService.findOne({
            where: { id: register.kitchenId },
        });
        if (!kitchenFind || kitchenFind == null)
            throw new common_1.HttpException('Kitchen not found', common_1.HttpStatus.NOT_FOUND);
        register.password = await bcrypt.hash(register.password, 10);
        const callback = async (entityManager) => {
            const role = await entityManager.findOne(role_entity_1.RoleEntity, {
                where: { name: role_enum_1.RoleEnum.SHIPPER },
            });
            const accountEntity = await entityManager.save(account_entity_1.AccountEntity, entityManager.create(account_entity_1.AccountEntity, {
                phone: register.phone,
                password: register.password,
                status: "active",
                role,
            }));
            await entityManager.save(shipper_entity_1.ShipperEntity, entityManager.create(shipper_entity_1.ShipperEntity, {
                id: accountEntity.id,
                noPlate: register.noPlate,
                vehicleType: register.vehicleType,
                status: shipperStatus_enum_1.ShipperStatusEnum.ACTIVE,
                kitchen: kitchenFind,
            }));
            await entityManager.save(profile_entity_1.ProfileEntity, entityManager.create(profile_entity_1.ProfileEntity, Object.assign({ account: accountEntity, avatar: 'https://firebasestorage.googleapis.com/v0/b/meal-subcription-plan.appspot.com/o/default_avatar.png?alt=media&token=5623e4d3-4139-4fb8-abd0-eea54c02cc83' }, register)));
        };
        await this.accountsService.transaction(callback, this.dataSource);
        return this.accountsService.findOne({
            relations: { role: true, shipper: true, kitchen: true },
            where: { phone: register.phone },
        });
    }
    async registerKitchen(register) {
        const account = await this.accountsService.findOne({
            where: { phone: register.phone },
        });
        if (Boolean(account)) {
            throw new common_1.HttpException('Account already exists', common_1.HttpStatus.BAD_REQUEST);
        }
        const checkEmail = await this.profileService.findOne({
            where: { email: register.email },
        });
        if (Boolean(checkEmail)) {
            throw new common_1.HttpException('Email already exists', common_1.HttpStatus.BAD_REQUEST);
        }
        register.password = await bcrypt.hash(register.password, 10);
        const callback = async (entityManager) => {
            const role = await entityManager.findOne(role_entity_1.RoleEntity, {
                where: { name: role_enum_1.RoleEnum.KITCHEN },
            });
            const accountEntity = await entityManager.save(account_entity_1.AccountEntity, entityManager.create(account_entity_1.AccountEntity, {
                phone: register.phone,
                password: register.password,
                status: "active",
                role,
            }));
            await entityManager.save(kitchens_entity_1.KitchenEntity, entityManager.create(kitchens_entity_1.KitchenEntity, {
                id: accountEntity.id,
                address: register.address,
                openTime: register.openTime,
                closeTime: register.closeTime,
                openingDate: register.openingDate,
            }));
            await entityManager.save(profile_entity_1.ProfileEntity, entityManager.create(profile_entity_1.ProfileEntity, Object.assign({ account: accountEntity }, register)));
        };
        await this.accountsService.transaction(callback, this.dataSource);
        return this.accountsService.findOne({
            relations: { role: true, kitchen: true },
            where: { phone: register.phone },
        });
    }
    async checkPhoneExist(dto) {
        const { phone } = dto;
        const user = await this.accountsService.findOne({
            relations: { role: true },
            where: { phone },
        });
        if (!user)
            throw new common_1.HttpException('Phone not exist', common_1.HttpStatus.BAD_REQUEST);
        if (user.status != "active") {
            throw new common_1.HttpException('This phone do not active', common_1.HttpStatus.BAD_REQUEST);
        }
        const role = user.role.name;
        const payload = { phone, role };
        const refreshToken = this.jwtService.sign({ id: user.id }, {
            secret: this.jwtConfigService.refreshTokenSecret,
            expiresIn: this.jwtConfigService.refreshTokenExpiresIn,
        });
        await this.accountsService.updateRefreshToken(refreshToken, user.id);
        return {
            access_token: this.jwtService.sign(payload, {
                secret: this.jwtConfigService.accessTokenSecret,
                expiresIn: this.jwtConfigService.accessTokenExpiresIn,
            }),
            refresh_token: refreshToken,
        };
    }
    async checkPhoneShipperExist(dto) {
        const { phone } = dto;
        const user = await this.accountsService.findOne({
            relations: { role: true },
            where: { phone, role: { name: role_enum_1.RoleEnum.SHIPPER } },
        });
        if (!user)
            throw new common_1.HttpException('Phone not exist', common_1.HttpStatus.BAD_REQUEST);
        if (user.status != "active") {
            throw new common_1.HttpException('This phone do not active', common_1.HttpStatus.BAD_REQUEST);
        }
        const role = user.role.name;
        const payload = { phone, role };
        const refreshToken = this.jwtService.sign({ id: user.id }, {
            secret: this.jwtConfigService.refreshTokenSecret,
            expiresIn: this.jwtConfigService.refreshTokenExpiresIn,
        });
        await this.accountsService.updateRefreshToken(refreshToken, user.id);
        return {
            access_token: this.jwtService.sign(payload, {
                secret: this.jwtConfigService.accessTokenSecret,
                expiresIn: this.jwtConfigService.accessTokenExpiresIn,
            }),
            refresh_token: refreshToken,
        };
    }
    async checkPhoneCustomerExist(dto) {
        const { phone } = dto;
        const user = await this.accountsService.findOne({
            relations: { role: true },
            where: { phone, role: { name: role_enum_1.RoleEnum.CUSTOMER } },
        });
        if (!user)
            throw new common_1.HttpException('Phone not exist', common_1.HttpStatus.BAD_REQUEST);
        if (user.status != "active") {
            throw new common_1.HttpException('This phone do not active', common_1.HttpStatus.BAD_REQUEST);
        }
        const role = user.role.name;
        const payload = { phone, role };
        const refreshToken = this.jwtService.sign({ id: user.id }, {
            secret: this.jwtConfigService.refreshTokenSecret,
            expiresIn: this.jwtConfigService.refreshTokenExpiresIn,
        });
        await this.accountsService.updateRefreshToken(refreshToken, user.id);
        return {
            access_token: this.jwtService.sign(payload, {
                secret: this.jwtConfigService.accessTokenSecret,
                expiresIn: this.jwtConfigService.accessTokenExpiresIn,
            }),
            refresh_token: refreshToken,
        };
    }
    async loginAll(dto) {
        const { phone, password } = dto;
        const user = await this.accountsService.findOne({
            relations: { role: true },
            where: { phone, status: "active" },
        });
        if (!user)
            throw new common_1.HttpException('Account invalid', common_1.HttpStatus.BAD_REQUEST);
        const isCorrectPassword = await bcrypt.compare(password, user.password);
        if (!isCorrectPassword)
            throw new common_1.HttpException('Wrong password', common_1.HttpStatus.BAD_REQUEST);
        const role = user.role.name;
        const payload = { phone, role };
        const refreshToken = this.jwtService.sign({ id: user.id }, {
            secret: this.jwtConfigService.refreshTokenSecret,
            expiresIn: this.jwtConfigService.refreshTokenExpiresIn,
        });
        await this.accountsService.updateRefreshToken(refreshToken, user.id);
        return {
            access_token: this.jwtService.sign(payload, {
                secret: this.jwtConfigService.accessTokenSecret,
                expiresIn: this.jwtConfigService.accessTokenExpiresIn,
            }),
            refresh_token: refreshToken,
        };
    }
    async login(dto, role) {
        const { phone, password } = dto;
        const user = await this.accountsService.findOne({
            relations: { role: true },
            where: { phone, role: { name: role }, status: "active" },
        });
        if (!user)
            throw new common_1.HttpException('Account invalid', common_1.HttpStatus.BAD_REQUEST);
        const isCorrectPassword = await bcrypt.compare(password, user.password);
        if (!isCorrectPassword)
            throw new common_1.HttpException('Wrong password', common_1.HttpStatus.BAD_REQUEST);
        const payload = { phone, role };
        const refreshToken = this.jwtService.sign({ id: user.id }, {
            secret: this.jwtConfigService.refreshTokenSecret,
            expiresIn: this.jwtConfigService.refreshTokenExpiresIn,
        });
        await this.accountsService.updateRefreshToken(refreshToken, user.id);
        return {
            access_token: this.jwtService.sign(payload, {
                secret: this.jwtConfigService.accessTokenSecret,
                expiresIn: this.jwtConfigService.accessTokenExpiresIn,
            }),
            refresh_token: refreshToken,
        };
    }
    async refreshToken(refreshToken) {
        const { id } = (await this.jwtService.verify(refreshToken, {
            secret: this.jwtConfigService.refreshTokenSecret,
            ignoreExpiration: false,
        }));
        const user = await this.accountsService.findOne({
            where: { id: id },
            relations: {
                role: true,
            },
        });
        if (!user || user.refreshToken != refreshToken) {
            throw new common_1.HttpException('Token invalid', common_1.HttpStatus.BAD_REQUEST);
        }
        const payload = { phone: user.phone, role: user.role.name };
        return {
            access_token: this.jwtService.sign(payload, {
                secret: this.jwtConfigService.accessTokenSecret,
                expiresIn: this.jwtConfigService.accessTokenExpiresIn,
            }),
        };
    }
    async logout(user) {
        const result = await this.accountsService.updateRefreshToken(null, user.id);
        return result.affected == 1 ? 'logout success' : 'logout failure';
    }
    async signUpAdmin(register) {
        const account = await this.accountsService.findOne({
            where: { phone: register.phone },
        });
        if (account) {
            throw new common_1.HttpException('Account already exists', common_1.HttpStatus.BAD_REQUEST);
        }
        const email = await this.profileService.findOne({
            where: { email: register.email },
        });
        if (email) {
            throw new common_1.HttpException('Email already exists', common_1.HttpStatus.BAD_REQUEST);
        }
        register.password = await bcrypt.hash(register.password, 10);
        const callback = async (entityManager) => {
            const role = await entityManager.findOne(role_entity_1.RoleEntity, {
                where: { name: role_enum_1.RoleEnum.ADMIN },
            });
            const accountEntity = await entityManager.save(account_entity_1.AccountEntity, entityManager.create(account_entity_1.AccountEntity, Object.assign(Object.assign({}, register), { role })));
            await entityManager.save(profile_entity_1.ProfileEntity, entityManager.create(profile_entity_1.ProfileEntity, Object.assign({ account: accountEntity }, register)));
        };
        await this.accountsService.transaction(callback, this.dataSource);
        return this.accountsService.findOne({
            relations: { role: true, profile: true },
            where: { phone: register.phone },
        });
    }
    async signUpManager(register) {
        const account = await this.accountsService.findOne({
            where: { phone: register.phone },
        });
        if (account) {
            throw new common_1.HttpException('Account already exists', common_1.HttpStatus.BAD_REQUEST);
        }
        const email = await this.profileService.findOne({
            where: { email: register.email },
        });
        if (email) {
            throw new common_1.HttpException('Email already exists', common_1.HttpStatus.BAD_REQUEST);
        }
        register.password = await bcrypt.hash(register.password, 10);
        const callback = async (entityManager) => {
            const role = await entityManager.findOne(role_entity_1.RoleEntity, {
                where: { name: role_enum_1.RoleEnum.MANAGER },
            });
            const accountEntity = await entityManager.save(account_entity_1.AccountEntity, entityManager.create(account_entity_1.AccountEntity, Object.assign(Object.assign({}, register), { role })));
            await entityManager.save(profile_entity_1.ProfileEntity, entityManager.create(profile_entity_1.ProfileEntity, Object.assign({ account: accountEntity }, register)));
        };
        await this.accountsService.transaction(callback, this.dataSource);
        return this.accountsService.findOne({
            relations: { role: true, profile: true },
            where: { phone: register.phone },
        });
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource,
        accounts_service_1.AccountsService,
        profile_service_1.ProfileService,
        roles_service_1.RolesService,
        shippers_service_1.ShippersService,
        jwt_1.JwtService,
        config_service_1.JwtConfigService,
        kitchens_service_1.KitchenService,
        shared_service_1.SharedService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map