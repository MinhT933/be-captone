import { BankEntity } from 'src/models/banks/entities/bank.entity';
import { SubscriptionEntity } from 'src/models/subscriptions/entities/subscription.entity';
import { BaseEntity } from '../../base/base.entity';
export declare class PaymentEntity extends BaseEntity {
    id: string;
    amount: number;
    bankTranNo: string;
    cardType: string;
    orderInfo: string;
    payDate: string;
    transactionNo: string;
    transactionStatus: string;
    bank: BankEntity;
    subscription: SubscriptionEntity;
}
