import { AccountEntity } from 'src/models/accounts/entities/account.entity';
import { BaseEntity } from 'src/models/base/base.entity';
export declare class ProfileEntity extends BaseEntity {
    id: string;
    fullName: string;
    DOB: Date;
    avatar: string;
    email: string;
    account: AccountEntity;
}
