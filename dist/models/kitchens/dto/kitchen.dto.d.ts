import { AccountDTO } from 'src/models/accounts/dto/accounts.dto';
import { ProfileDTO } from 'src/models/profiles/dto/profile.dto';
import { BaseDTO } from '../../base/base.dto';
export declare class KitchenDTO extends BaseDTO {
    address: string;
    profile: ProfileDTO;
    account: AccountDTO;
}
