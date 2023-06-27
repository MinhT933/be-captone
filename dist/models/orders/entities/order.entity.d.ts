import { BaseEntity } from 'src/models/base/base.entity';
import { BatchEntity } from 'src/models/batchs/entities/batch.entity';
import { PackageItemEntity } from 'src/models/package-item/entities/package-item.entity';
import { SessionEntity } from 'src/models/sessions/entities/sessions.entity';
import { StationEntity } from 'src/models/stations/entities/stations.entity';
import { SubscriptionEntity } from 'src/models/subscriptions/entities/subscription.entity';
export declare class OrderEntity extends BaseEntity {
    status: string;
    subscription: SubscriptionEntity;
    packageItem: PackageItemEntity;
    station: StationEntity;
    session: SessionEntity;
    batch: BatchEntity;
}
