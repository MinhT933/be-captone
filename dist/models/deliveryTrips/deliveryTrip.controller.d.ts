import { AccountEntity } from '../accounts/entities/account.entity';
import { DeliveryTripService } from './deliveryTrip.service';
import { AssignShipperDTO, CreateTripDTO } from './dto/createDeliveryTrip.dto';
import { TripFilter, TripFilterBySession, TripFilterDate } from './dto/deliveryTrip-filter.dto';
import { DirectShipperDTO, UpdateStatusTrip } from './dto/updateStatusTrip.dto';
import { DeliveryTripEntity } from './entities/deliveryTrip.entity';
export declare class DeliveryTripController {
    private readonly deliveryTripService;
    constructor(deliveryTripService: DeliveryTripService);
    getAll(filter: TripFilter): Promise<DeliveryTripEntity[] | string>;
    getDeliveryTripByStatus(user: AccountEntity, filter: TripFilter): Promise<DeliveryTripEntity[]>;
    getDeliveryTripByShipper(user: AccountEntity): Promise<DeliveryTripEntity[]>;
    getDeliveryTripByDate(kitchen: AccountEntity, filter: TripFilterDate): Promise<DeliveryTripEntity[]>;
    getDeliveryTripById(id: string): Promise<DeliveryTripEntity>;
    getTripBySession(filter: TripFilterBySession): Promise<DeliveryTripEntity[]>;
    updateTripStatus(orderIds: UpdateStatusTrip): Promise<DeliveryTripEntity>;
    createDeliveryTrip(dto: CreateTripDTO): Promise<DeliveryTripEntity[]>;
    assignShipperToTrip(dto: AssignShipperDTO): Promise<DeliveryTripEntity[]>;
    rejectDeliveryTrip(id: string, user: AccountEntity): Promise<string>;
    transferShipper(transfer: DirectShipperDTO): Promise<string>;
}
