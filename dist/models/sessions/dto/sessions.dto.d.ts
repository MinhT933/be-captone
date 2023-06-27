import { BaseDTO } from 'src/models/base/base.dto';
import { DeliveryTripDTO } from 'src/models/deliveryTrips/dto/deliveryTrip.dto';
import { KitchenDTO } from 'src/models/kitchens/dto/kitchen.dto';
import { OrderDTO } from 'src/models/orders/dto/order.dto';
import { ShipperDTO } from 'src/models/shippers/dto/shipper.dto';
import { TimeSlotDTO } from 'src/models/time-slots/dto/time-slot.dto';
export declare class SessionDTO extends BaseDTO {
    workDate: Date;
    status: string;
    orders: OrderDTO[];
    deliveryTrips: DeliveryTripDTO[];
    timeSlot: TimeSlotDTO;
    kitchen: KitchenDTO;
    shippers: ShipperDTO[];
}
