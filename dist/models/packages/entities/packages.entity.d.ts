import { BaseEntity } from 'src/models/base/base.entity';
import { PackageCategoryEntity } from 'src/models/package-categories/entities/package-categories.entity';
import { PackageItemEntity } from 'src/models/package-item/entities/package-item.entity';
import { SubscriptionEntity } from 'src/models/subscriptions/entities/subscription.entity';
export declare class PackageEntity extends BaseEntity {
    startSale: Date;
    endSale: Date;
    name: string;
    description: string;
    price: number;
    image: string;
    totalDate: number;
    totalMeal: number;
    status: string;
    packageItem: PackageItemEntity[];
    subscriptions: SubscriptionEntity[];
    packageCategory: PackageCategoryEntity;
}
