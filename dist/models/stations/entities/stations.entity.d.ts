import { BaseEntity } from 'src/models/base/base.entity';
import { BatchEntity } from 'src/models/batchs/entities/batch.entity';
import { KitchenEntity } from 'src/models/kitchens/entities/kitchens.entity';
import { OrderEntity } from 'src/models/orders/entities/order.entity';
import { Point } from 'geojson';
export declare class StationEntity extends BaseEntity {
    name: string;
    address: string;
    phone: string;
    openTime: Date;
    closeTime: Date;
    coordinate: Point;
    status: string;
    orders: OrderEntity[];
    kitchen: KitchenEntity;
    batchs: BatchEntity[];
}
