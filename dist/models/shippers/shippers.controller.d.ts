import { AccountEntity } from '../accounts/entities/account.entity';
import { ListShipperID } from './dto/addShipper.dto';
import { ShipperFilterDTO, ShipperStatusFilter } from './dto/shipper-status-filter.dto';
import { UpdateShipperDTO } from './dto/update_shipper';
import { ShipperEntity } from './entities/shipper.entity';
import { ShippersService } from './shippers.service';
export declare class ShippersController {
    private readonly shippersService;
    constructor(shippersService: ShippersService);
    fidnAll(statusFilter: ShipperStatusFilter): Promise<ShipperEntity[]>;
    getShipperByKitchen(filter: ShipperStatusFilter): Promise<ShipperEntity[]>;
    getShipperByStatus(filter: ShipperFilterDTO): Promise<ShipperEntity[]>;
    getFreeShipper(): Promise<ShipperEntity[]>;
    findShipperByID(id: string): Promise<ShipperEntity>;
    addShipperToKitchen(dto: ListShipperID): Promise<string>;
    updateShipper(id: string, update: UpdateShipperDTO): Promise<ShipperEntity>;
    inActiveShipper(id: string): Promise<string>;
    offByShipper(user: AccountEntity): Promise<string>;
}
