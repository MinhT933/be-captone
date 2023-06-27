import { BaseEntity } from 'src/models/base/base.entity';
import { FoodEntity } from 'src/models/foods/entities/foods.entity';
export declare class FoodCategoryEntity extends BaseEntity {
    name: string;
    foods: FoodEntity[];
}
