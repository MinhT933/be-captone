import { TimeSlotsService } from './time-slots.service';
import { TimeSlotEntity } from './entities/time-slots.entity';
export declare class TimeSlotsController {
    private readonly timeSlotsService;
    constructor(timeSlotsService: TimeSlotsService);
    findAll(): Promise<TimeSlotEntity[] | string>;
    getTimeSlotFlag(flag: number): Promise<TimeSlotEntity[]>;
    finById(id: string): Promise<TimeSlotEntity>;
}
