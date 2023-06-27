export declare class Coordinate {
    lattitude: number;
    longitude: number;
}
export declare class CreateStationDTO {
    kitchenId: string;
    name: string;
    address: string;
    phone: string;
    openTime: Date;
    closeTime: Date;
    coordinate: Coordinate;
}
