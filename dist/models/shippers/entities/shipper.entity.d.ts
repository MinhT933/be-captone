import { AccountEntity } from 'src/models/accounts/entities/account.entity';
import { BaseEntity } from 'src/models/base/base.entity';
import { DeliveryTripEntity } from 'src/models/deliveryTrips/entities/deliveryTrip.entity';
import { KitchenEntity } from 'src/models/kitchens/entities/kitchens.entity';
import { SessionEntity } from 'src/models/sessions/entities/sessions.entity';
export declare class ShipperEntity extends BaseEntity {
    id: string;
    noPlate: string;
    vehicleType: string;
    status: string;
    account: AccountEntity;
    deliveryTrips: DeliveryTripEntity[];
    kitchen: KitchenEntity;
    sessions: SessionEntity[];
}
