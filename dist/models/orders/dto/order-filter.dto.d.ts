import { OrderEnum } from 'src/common/enums/order.enum';
import { BaseFilter } from 'src/models/base/base.filter';
export declare class OrderFilter extends BaseFilter {
    startDate: Date;
    endDate: Date;
}
export declare class OrderFilterMe extends BaseFilter {
    status: OrderEnum;
}
export declare class OrderFilterDTO {
    status: OrderEnum;
}
export declare class OrderSearchByDate {
    deliveryDate: Date;
}
export declare class OrderGetByKitchen {
    stationId: string;
    kitchenId: string;
    time_slotId: string;
    deliveryDate: Date;
}
export declare class PreFoodByWeek {
    startDate: Date;
    endDate: Date;
}
export declare class SessionFilterOrder {
    sessionId: string;
    status: OrderEnum;
}
