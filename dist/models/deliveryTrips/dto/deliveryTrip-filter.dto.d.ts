import { DeliveryTripEnum } from 'src/common/enums/deliveryTrip.enum';
export declare class TripFilter {
    status: DeliveryTripEnum;
}
export declare class TripFilterByKitchen {
    status: DeliveryTripEnum;
    deliveryDate: Date;
}
export declare class TripFilterDate {
    deliveryDate: Date;
}
export declare class SessionFilterTrip {
    deliveryDate: Date;
}
export declare class TripFilterBySession {
    sessionId: string;
    status: DeliveryTripEnum;
}
