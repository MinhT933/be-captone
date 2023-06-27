import { DataSource, Repository } from 'typeorm';
import { BaseService } from '../base/base.service';
import { KitchenEntity } from './entities/kitchens.entity';
import { ProfileService } from '../profiles/profile.service';
import { UpdateKitchenDTO } from './dto/update_kitchen.dto';
import { AccountsService } from '../accounts/accounts.service';
import { KitchenFilterDTO } from './dto/kitchenFilter.dto';
export declare class KitchenService extends BaseService<KitchenEntity> {
    private readonly dataSource;
    private readonly kitchensRepository;
    private readonly profileService;
    private readonly accountService;
    constructor(dataSource: DataSource, kitchensRepository: Repository<KitchenEntity>, profileService: ProfileService, accountService: AccountsService);
    findAll(): Promise<KitchenEntity[]>;
    getKitchenByStatus(filter: KitchenFilterDTO): Promise<KitchenEntity[]>;
    updateKitchen(id: string, update: UpdateKitchenDTO): Promise<KitchenEntity>;
    updateStatusKitchen(id: string): Promise<string>;
}
