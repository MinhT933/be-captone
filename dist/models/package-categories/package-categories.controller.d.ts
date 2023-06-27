/// <reference types="multer" />
import { CreatePackageCategoryDTO } from './dto/create-package-category';
import { UpdatePackageCategoryDTO } from './dto/update-package-category';
import { PackageCategoryEntity } from './entities/package-categories.entity';
import { PackageCategoriesService } from './package-categories.service';
export declare class PackgeCategoriesController {
    private readonly packageCategoriesService;
    constructor(packageCategoriesService: PackageCategoriesService);
    findAll(): Promise<PackageCategoryEntity[]>;
    createCategory(createPackageCategory: CreatePackageCategoryDTO, image: Express.Multer.File): Promise<PackageCategoryEntity>;
    getCategoryHasPackageActive(): Promise<PackageCategoryEntity[]>;
    updatePackageCategory(id: string, update: UpdatePackageCategoryDTO, image: Express.Multer.File): Promise<string>;
    removeCategory(id: string): Promise<string>;
}
