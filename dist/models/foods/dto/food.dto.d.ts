import { FoodCategoryDTO } from 'src/models/food-categories/dto/food-category.dto';
import { BaseDTO } from '../../base/base.dto';
export declare class FoodDTO extends BaseDTO {
    name: string;
    description: string;
    price: number;
    image: string;
    status: string;
    foodCategory: FoodCategoryDTO;
}
