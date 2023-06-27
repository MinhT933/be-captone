import { BaseEntity } from 'src/models/base/base.entity';
import { FoodGroupEntity } from 'src/models/food-group/entities/food-group.entity';
import { OrderEntity } from 'src/models/orders/entities/order.entity';
import { PackageEntity } from 'src/models/packages/entities/packages.entity';
export declare class PackageItemEntity extends BaseEntity {
    deliveryDate: Date;
    itemCode: number;
    foodGroup: FoodGroupEntity;
    packages: PackageEntity;
    orders: OrderEntity[];
}
