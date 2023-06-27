import { BaseEntity } from 'src/models/base/base.entity';
import { FoodCategoryEntity } from 'src/models/food-categories/entities/food-categories.entity';
import { FoodGroupEntity } from 'src/models/food-group/entities/food-group.entity';
export declare class FoodEntity extends BaseEntity {
    name: string;
    description: string;
    price: number;
    image: string;
    status: string;
    foodCategory: FoodCategoryEntity;
    foodGroups: FoodGroupEntity[];
}
