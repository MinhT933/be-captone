import { SubscriptionDTO } from 'src/models/subscriptions/dto/subscription.dto';
import { BaseDTO } from '../../base/base.dto';
export declare class FeedBackDTO extends BaseDTO {
    packageRate: number;
    deliveryRate: number;
    comment: string;
    subscription: SubscriptionDTO;
}
