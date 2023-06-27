import { BaseDTO } from 'src/models/base/base.dto';
import { FoodGroupDTO } from 'src/models/food-group/dto/food-group.dto';
export declare class PackageItemDTO extends BaseDTO {
    itemCode: number;
    deliveryDate: Date;
    foodGroup: FoodGroupDTO;
}
