import { FoodDTO } from 'src/models/foods/dto/food.dto';
import { PackageItemDTO } from 'src/models/package-item/dto/package-item.dto';
import { StationDTO } from 'src/models/stations/dto/stations.dto';
import { SubscriptionDTO } from 'src/models/subscriptions/dto/subscription.dto';
import { BaseDTO } from '../../base/base.dto';
export declare class OrderDTO extends BaseDTO {
    deliveryDate: Date;
    deliveryTime: Date;
    priceFood: number;
    nameFood: number;
    status: string;
    subscription: SubscriptionDTO;
    packageItem: PackageItemDTO;
    food: FoodDTO;
    station: StationDTO;
}
