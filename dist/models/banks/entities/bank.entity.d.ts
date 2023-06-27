import { BaseEntity } from '../../base/base.entity';
import { PaymentEntity } from 'src/models/payment/entities/payment.entity';
export declare class BankEntity extends BaseEntity {
    name: string;
    bankCode: string;
    payments: PaymentEntity[];
}
