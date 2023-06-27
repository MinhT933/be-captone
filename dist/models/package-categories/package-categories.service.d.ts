/// <reference types="multer" />
import { Repository } from 'typeorm';
import { BaseService } from '../base/base.service';
import { PackageCategoryEntity } from './entities/package-categories.entity';
export declare class PackageCategoriesService extends BaseService<PackageCategoryEntity> {
    private readonly packgeCategoriesRepository;
    constructor(packgeCategoriesRepository: Repository<PackageCategoryEntity>);
    getAllPackageCategories(): Promise<PackageCategoryEntity[]>;
    createPackageCategories(name: string, image: Express.Multer.File): Promise<PackageCategoryEntity>;
    getCategoryHasPackageActive(): Promise<PackageCategoryEntity[]>;
    updatePackageCategory(id: string, name: string, image: Express.Multer.File): Promise<string>;
    deletePackageCategory(id: string): Promise<string>;
}
