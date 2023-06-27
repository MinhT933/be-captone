import { BaseEntity } from 'src/models/base/base.entity';
import { KitchenEntity } from 'src/models/kitchens/entities/kitchens.entity';
import { NotificationEntity } from 'src/models/notifications/entities/notification.entity';
import { ProfileEntity } from 'src/models/profiles/entities/profile.entity';
import { RoleEntity } from 'src/models/roles/entities/role.entity';
import { ShipperEntity } from 'src/models/shippers/entities/shipper.entity';
import { SubscriptionEntity } from 'src/models/subscriptions/entities/subscription.entity';
export declare class AccountEntity extends BaseEntity {
    phone: string;
    password: string;
    status: string;
    refreshToken: string;
    deviceToken: string;
    shipper: ShipperEntity;
    kitchen: KitchenEntity;
    role: RoleEntity;
    profile: ProfileEntity;
    notifications: NotificationEntity[];
    subscriptions: SubscriptionEntity[];
}
