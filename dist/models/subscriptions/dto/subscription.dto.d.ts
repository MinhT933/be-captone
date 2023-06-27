import { BaseDTO } from '../../base/base.dto';
import { PackageDTO } from 'src/models/packages/dto/packages.dto';
import { OrderDTO } from 'src/models/orders/dto/order.dto';
export declare class SubscriptionDTO extends BaseDTO {
    totalPrice: number;
    subscriptionDate: Date;
    status: string;
    packages: PackageDTO;
    orders: OrderDTO;
}
