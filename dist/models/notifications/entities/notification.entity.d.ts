import { BaseEntity } from '../../base/base.entity';
import { AccountEntity } from '../../accounts/entities/account.entity';
export declare class NotificationEntity extends BaseEntity {
    title: string;
    body: string;
    data: string;
    status: string;
    type: string;
    account: AccountEntity;
}
