import { Repository } from 'typeorm';
import { BaseService } from '../base/base.service';
import { TimeSlotEntity } from './entities/time-slots.entity';
export declare class TimeSlotsService extends BaseService<TimeSlotEntity> {
    private readonly timeSlotsRepository;
    constructor(timeSlotsRepository: Repository<TimeSlotEntity>);
}
