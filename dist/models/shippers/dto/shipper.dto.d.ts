import { AccountDTO } from 'src/models/accounts/dto/accounts.dto';
import { BaseDTO } from 'src/models/base/base.dto';
import { KitchenDTO } from 'src/models/kitchens/dto/kitchen.dto';
import { ProfileDTO } from 'src/models/profiles/dto/profile.dto';
export declare class ShipperDTO extends BaseDTO {
    noPlate: string;
    vehicleType: string;
    status: string;
    profile: ProfileDTO;
    account: AccountDTO;
    kitchen: KitchenDTO;
}
