import { BaseEntity } from 'src/models/base/base.entity';
import { SubscriptionEntity } from 'src/models/subscriptions/entities/subscription.entity';
export declare class FeedBackEntity extends BaseEntity {
    packageRate: number;
    deliveryRate: number;
    comment: string;
    subscription: SubscriptionEntity;
}
