import { FoodDTO } from 'src/models/foods/dto/food.dto';
import { BaseDTO } from '../../base/base.dto';
export declare class FoodGroupDTO extends BaseDTO {
    name: string;
    description: string;
    totalFood: number;
    status: string;
    foods: FoodDTO[];
}
