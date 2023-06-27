import { BaseEntity } from 'src/models/base/base.entity';
import { FoodEntity } from 'src/models/foods/entities/foods.entity';
import { PackageItemEntity } from 'src/models/package-item/entities/package-item.entity';
export declare class FoodGroupEntity extends BaseEntity {
    name: string;
    description: string;
    status: string;
    foods: FoodEntity[];
    packageItem: PackageItemEntity[];
}
