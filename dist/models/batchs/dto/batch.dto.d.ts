import { BaseDTO } from 'src/models/base/base.dto';
import { DeliveryTripDTO } from 'src/models/deliveryTrips/dto/deliveryTrip.dto';
import { OrderDTO } from 'src/models/orders/dto/order.dto';
export declare class BatchDTO extends BaseDTO {
    deliveryTrip: DeliveryTripDTO;
    orders: OrderDTO[];
}
