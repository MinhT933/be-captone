import { AccountStatusEnum } from 'src/common/enums/accountStatus.enum';
import { ShipperStatusEnum } from 'src/common/enums/shipperStatus.enum';
export declare class ShipperStatusFilter {
    kitchenId: string;
    status: ShipperStatusEnum;
}
export declare class ShipperFilterDTO {
    statusAcc: AccountStatusEnum;
}
