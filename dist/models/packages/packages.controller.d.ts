/// <reference types="multer" />
import { PackageService } from './packages.service';
import { PackageEntity } from './entities/packages.entity';
import { CreatePackageDTO } from './dto/create-package.dto';
import { UpdatePackageDTO } from './dto/update-package.dto';
import { PackageFilterDTO } from './dto/package-filter.dto';
export declare class PackageController {
    private readonly packageService;
    constructor(packageService: PackageService);
    getAllPackage(): Promise<PackageEntity[]>;
    getPackageByStatus(packageFilter: PackageFilterDTO): Promise<PackageEntity[]>;
    getPackageByID(id: string): Promise<PackageEntity>;
    findItemOfPackage(id: string): Promise<PackageEntity>;
    createPackage(createData: CreatePackageDTO, image: Express.Multer.File): Promise<PackageEntity>;
    updatePackage(id: string, data: UpdatePackageDTO, image: Express.Multer.File): Promise<string>;
    confirmPackage(id: string): Promise<string>;
    getPackageActiveByCate(categoryId: string): Promise<PackageEntity[]>;
}
