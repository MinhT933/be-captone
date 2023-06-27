import { DataSource, Repository } from 'typeorm';
import { BaseService } from '../base/base.service';
import { ShipperEntity } from './entities/shipper.entity';
import { ProfileService } from '../profiles/profile.service';
import { UpdateShipperDTO } from './dto/update_shipper';
import { AccountsService } from '../accounts/accounts.service';
import { AccountEntity } from '../accounts/entities/account.entity';
import { ShipperFilterDTO, ShipperStatusFilter } from './dto/shipper-status-filter.dto';
import { KitchenService } from '../kitchens/kitchens.service';
import { ListShipperID } from './dto/addShipper.dto';
export declare class ShippersService extends BaseService<ShipperEntity> {
    private readonly dataSource;
    private readonly shipperRepository;
    private readonly profileService;
    private readonly accountService;
    private readonly kitchenService;
    constructor(dataSource: DataSource, shipperRepository: Repository<ShipperEntity>, profileService: ProfileService, accountService: AccountsService, kitchenService: KitchenService);
    findAll(statusFilter: ShipperStatusFilter): Promise<ShipperEntity[]>;
    getShipperByStatus(filter: ShipperFilterDTO): Promise<ShipperEntity[]>;
    getFreeShipper(): Promise<ShipperEntity[]>;
    updateShipper(id: string, update: UpdateShipperDTO): Promise<ShipperEntity>;
    updateStatusShipper(id: string): Promise<string>;
    offByShipper(user: AccountEntity): Promise<string>;
    getShipperByKitchen(filter: ShipperStatusFilter): Promise<ShipperEntity[]>;
    addShipperToKitchen(dto: ListShipperID): Promise<string>;
}
