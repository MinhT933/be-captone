import { BaseEntity } from 'src/models/base/base.entity';
import { BatchEntity } from 'src/models/batchs/entities/batch.entity';
import { DeliveryTripEntity } from 'src/models/deliveryTrips/entities/deliveryTrip.entity';
import { KitchenEntity } from 'src/models/kitchens/entities/kitchens.entity';
import { OrderEntity } from 'src/models/orders/entities/order.entity';
import { ShipperEntity } from 'src/models/shippers/entities/shipper.entity';
import { TimeSlotEntity } from 'src/models/time-slots/entities/time-slots.entity';
export declare class SessionEntity extends BaseEntity {
    id: string;
    workDate: Date;
    status: string;
    orders: OrderEntity[];
    deliveryTrips: DeliveryTripEntity[];
    timeSlot: TimeSlotEntity;
    batchs: BatchEntity[];
    kitchen: KitchenEntity;
    shippers: ShipperEntity[];
}
