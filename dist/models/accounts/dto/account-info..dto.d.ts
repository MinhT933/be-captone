import { RoleDTO } from './../../roles/dto/role.dto';
import { BaseDTO } from '../../base/base.dto';
import { ProfileDTO } from '../../profiles/dto/profile.dto';
import { KitchenInfoDTO } from 'src/models/kitchens/dto/kitchen.info.dto';
import { ShipperInfoDTO } from 'src/models/shippers/dto/shipper.info.dto';
export declare class AccountInfoDTO extends BaseDTO {
    phone: string;
    status: string;
    profile: ProfileDTO;
    role: RoleDTO;
    kitchen: KitchenInfoDTO;
    shipper: ShipperInfoDTO;
}
