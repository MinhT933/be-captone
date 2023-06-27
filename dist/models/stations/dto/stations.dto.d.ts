import { BaseDTO } from '../../base/base.dto';
export declare class StationDTO extends BaseDTO {
    name: string;
    address: string;
    phone: string;
    openTime: Date;
    closeTime: Date;
    status: string;
}
