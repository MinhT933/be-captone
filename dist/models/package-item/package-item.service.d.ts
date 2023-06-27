import { Repository } from 'typeorm';
import { BaseService } from '../base/base.service';
import { FoodGroupService } from '../food-group/food-group.service';
import { PackageService } from '../packages/packages.service';
import { CreatePackageItemDTO } from './dto/create-package-item.dto';
import { UpdatePackageItemDTO } from './dto/update-package-item';
import { PackageItemEntity } from './entities/package-item.entity';
export declare class PackageItemService extends BaseService<PackageItemEntity> {
    private readonly packageItemRepository;
    private readonly foodGroupService;
    private readonly packageService;
    constructor(packageItemRepository: Repository<PackageItemEntity>, foodGroupService: FoodGroupService, packageService: PackageService);
    getAllPackageItem(): Promise<PackageItemEntity[]>;
    createPackageItem(data: CreatePackageItemDTO): Promise<PackageItemEntity>;
    deletePackageItem(id: string): Promise<string>;
    updatePackageItem(id: string, dto: UpdatePackageItemDTO): Promise<string>;
}
