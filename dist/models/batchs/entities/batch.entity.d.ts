import { BaseEntity } from 'src/models/base/base.entity';
import { DeliveryTripEntity } from 'src/models/deliveryTrips/entities/deliveryTrip.entity';
import { OrderEntity } from 'src/models/orders/entities/order.entity';
import { SessionEntity } from 'src/models/sessions/entities/sessions.entity';
import { StationEntity } from 'src/models/stations/entities/stations.entity';
export declare class BatchEntity extends BaseEntity {
    id: string;
    status: string;
    station: StationEntity;
    deliveryTrip: DeliveryTripEntity;
    session: SessionEntity;
    orders: OrderEntity[];
}
