import { TimeSlotEntity } from 'src/models/time-slots/entities/time-slots.entity';
import { Repository } from 'typeorm';
export declare class TimeSlotsSeederService {
    private readonly timeSlotRepository;
    constructor(timeSlotRepository: Repository<TimeSlotEntity>);
    createTimeSlot(): Promise<void>;
}
