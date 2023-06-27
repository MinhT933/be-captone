import { SessionEnum } from 'src/common/enums/session.enum';
export declare class SessionFilterDTO {
    kitchenId: string;
    workDate: Date;
    status: SessionEnum;
}
export declare class SessionByDate {
    workDate: Date;
}
export declare class KitchenFilterSession {
    timeSlotId: string;
    workDate: Date;
}
