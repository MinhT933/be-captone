import { AccountEntity } from 'src/models/accounts/entities/account.entity';
import { BaseEntity } from 'src/models/base/base.entity';
import { SessionEntity } from 'src/models/sessions/entities/sessions.entity';
import { ShipperEntity } from 'src/models/shippers/entities/shipper.entity';
import { StationEntity } from 'src/models/stations/entities/stations.entity';
export declare class KitchenEntity extends BaseEntity {
    id: string;
    openTime: Date;
    closeTime: Date;
    openingDate: Date;
    address: string;
    account: AccountEntity;
    stations: StationEntity[];
    shippers: ShipperEntity[];
    sessions: SessionEntity[];
}
