import { KitchenFilterDTO } from './dto/kitchenFilter.dto';
import { UpdateKitchenDTO } from './dto/update_kitchen.dto';
import { KitchenEntity } from './entities/kitchens.entity';
import { KitchenService } from './kitchens.service';
export declare class KitchenController {
    private readonly kitchenService;
    constructor(kitchenService: KitchenService);
    fidnAll(): Promise<KitchenEntity[]>;
    getKitchenByStatus(filter: KitchenFilterDTO): Promise<KitchenEntity[]>;
    findKitchenByID(id: string): Promise<KitchenEntity>;
    updateKitchenByAdmin(id: string, update: UpdateKitchenDTO): Promise<KitchenEntity>;
    updateStatusKitchen(id: string): Promise<string>;
}
