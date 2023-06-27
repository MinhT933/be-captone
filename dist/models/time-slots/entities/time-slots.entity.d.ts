import { BaseEntity } from 'src/models/base/base.entity';
import { SessionEntity } from 'src/models/sessions/entities/sessions.entity';
export declare class TimeSlotEntity extends BaseEntity {
    startTime: Date;
    endTime: Date;
    flag: number;
    sessions: SessionEntity[];
}
