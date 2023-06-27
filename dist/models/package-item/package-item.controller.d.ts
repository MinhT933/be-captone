import { CreatePackageItemDTO } from './dto/create-package-item.dto';
import { UpdatePackageItemDTO } from './dto/update-package-item';
import { PackageItemEntity } from './entities/package-item.entity';
import { PackageItemService } from './package-item.service';
export declare class PackageItemController {
    private readonly packageItemService;
    constructor(packageItemService: PackageItemService);
    getAllPackageItem(): Promise<PackageItemEntity[]>;
    getPackageItemByID(id: string): Promise<PackageItemEntity>;
    createPackageItem(createDTO: CreatePackageItemDTO): Promise<PackageItemEntity>;
    updatePackageItem(id: string, dto: UpdatePackageItemDTO): Promise<string>;
    deletePackageItem(id: string): Promise<string>;
}
