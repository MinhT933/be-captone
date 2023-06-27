import { AccountEntity } from 'src/models/accounts/entities/account.entity';
import { BaseEntity } from 'src/models/base/base.entity';
export declare class RoleEntity extends BaseEntity {
    name: string;
    accounts: AccountEntity[];
}
