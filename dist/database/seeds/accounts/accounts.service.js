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
exports.AccountsSeederService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const data_1 = require("./data");
const role_entity_1 = require("../../../models/roles/entities/role.entity");
const profile_entity_1 = require("../../../models/profiles/entities/profile.entity");
const account_entity_1 = require("../../../models/accounts/entities/account.entity");
const role_enum_1 = require("../../../common/enums/role.enum");
const kitchens_entity_1 = require("../../../models/kitchens/entities/kitchens.entity");
const shipper_entity_1 = require("../../../models/shippers/entities/shipper.entity");
const accountStatus_enum_1 = require("../../../common/enums/accountStatus.enum");
let AccountsSeederService = class AccountsSeederService {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    async addData() {
        const roles = await this.dataSource
            .createQueryBuilder(role_entity_1.RoleEntity, 'roles')
            .select()
            .getMany();
        const data = (0, data_1.getData)();
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        const manager = queryRunner.manager;
        try {
            for (let i = 0, length = data.length; i < length; i++) {
                const { phone, password, status, role, fullName, dob, avatar, email } = data[i];
                const roleInDB = roles.find((roleInDB) => roleInDB.name === role);
                const account = await manager.save(account_entity_1.AccountEntity, manager.create(account_entity_1.AccountEntity, {
                    phone,
                    password,
                    role: roleInDB,
                    status,
                }));
                await manager.save(profile_entity_1.ProfileEntity, manager.create(profile_entity_1.ProfileEntity, {
                    id: account.id,
                    fullName,
                    DOB: dob,
                    avatar,
                    email,
                    account,
                }));
                if (account.role.name === role_enum_1.RoleEnum.KITCHEN) {
                    await manager.save(kitchens_entity_1.KitchenEntity, manager.create(kitchens_entity_1.KitchenEntity, {
                        id: account.id,
                        address: 'Q9',
                    }));
                }
                if (account.role.name === role_enum_1.RoleEnum.SHIPPER) {
                    await manager.save(shipper_entity_1.ShipperEntity, manager.create(shipper_entity_1.ShipperEntity, {
                        id: account.id,
                        noPlate: 'ABC123',
                        vehicleType: 'wave',
                        status: accountStatus_enum_1.AccountStatusEnum.ACTIVE,
                    }));
                }
            }
            await queryRunner.commitTransaction();
            console.info('++ Create account success');
        }
        catch (error) {
            console.error(error);
            await queryRunner.rollbackTransaction();
        }
        finally {
            await queryRunner.release();
        }
    }
};
AccountsSeederService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], AccountsSeederService);
exports.AccountsSeederService = AccountsSeederService;
//# sourceMappingURL=accounts.service.js.map