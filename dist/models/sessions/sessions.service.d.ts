import { Repository } from 'typeorm';
import { AccountEntity } from '../accounts/entities/account.entity';
import { BaseService } from '../base/base.service';
import { KitchenService } from '../kitchens/kitchens.service';
import { TimeSlotsService } from '../time-slots/time-slots.service';
import { CreateSessionDTO } from './dto/createSession.dto';
import { SessionByDate } from './dto/session_filter.dto';
import { SessionEntity } from './entities/sessions.entity';
import { DeliveryTripService } from '../deliveryTrips/deliveryTrip.service';
import { OrdersService } from '../orders/order.service';
import { BatchService } from '../batchs/batch.service';
export declare class SessionService extends BaseService<SessionEntity> {
    private readonly sessionRepository;
    private readonly kitchenService;
    private readonly timeSlotService;
    private readonly tripService;
    private readonly orderService;
    private readonly batchService;
    constructor(sessionRepository: Repository<SessionEntity>, kitchenService: KitchenService, timeSlotService: TimeSlotsService, tripService: DeliveryTripService, orderService: OrdersService, batchService: BatchService);
    createSession(dto: CreateSessionDTO): Promise<SessionEntity>;
    getAllSessionByKitchen(user: AccountEntity, filter: SessionByDate): Promise<SessionEntity[]>;
    getSessionDetail(id: string): Promise<SessionEntity>;
    doneSession(sessionId: string): Promise<SessionEntity>;
}
