import { AccountEntity } from 'src/models/accounts/entities/account.entity';
import { BaseEntity } from 'src/models/base/base.entity';
import { FeedBackEntity } from 'src/models/feedback/entities/feedback.entity';
import { OrderEntity } from 'src/models/orders/entities/order.entity';
import { PackageEntity } from 'src/models/packages/entities/packages.entity';
import { PaymentEntity } from 'src/models/payment/entities/payment.entity';
export declare class SubscriptionEntity extends BaseEntity {
    totalPrice: number;
    subscriptionDate: Date;
    status: string;
    account: AccountEntity;
    packages: PackageEntity;
    orders: OrderEntity[];
    payment: PaymentEntity;
    feedback: FeedBackEntity;
}
