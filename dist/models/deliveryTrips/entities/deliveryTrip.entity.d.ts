import { BaseEntity } from 'src/models/base/base.entity';
import { ShipperEntity } from 'src/models/shippers/entities/shipper.entity';
import { SessionEntity } from 'src/models/sessions/entities/sessions.entity';
import { BatchEntity } from 'src/models/batchs/entities/batch.entity';
export declare class DeliveryTripEntity extends BaseEntity {
    deliveryTime: Date;
    arrivedTime: Date;
    deliveryDate: Date;
    status: string;
    shipper: ShipperEntity;
    session: SessionEntity;
    batchs: BatchEntity[];
}
