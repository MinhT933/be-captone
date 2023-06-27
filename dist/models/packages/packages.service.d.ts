/// <reference types="multer" />
import { Repository } from 'typeorm';
import { BaseService } from '../base/base.service';
import { PackageEntity } from './entities/packages.entity';
import { CreatePackageDTO } from './dto/create-package.dto';
import { UpdatePackageDTO } from './dto/update-package.dto';
import { PackageCategoriesService } from '../package-categories/package-categories.service';
import { Mapper } from '@automapper/core';
import { PackageFilterDTO } from './dto/package-filter.dto';
export declare class PackageService extends BaseService<PackageEntity> {
    private readonly packagesRepository;
    private readonly mapper;
    private readonly categoryService;
    constructor(packagesRepository: Repository<PackageEntity>, mapper: Mapper, categoryService: PackageCategoriesService);
    listAllPackage(): Promise<PackageEntity[]>;
    getPackageByStatus(packageFilter: PackageFilterDTO): Promise<PackageEntity[]>;
    createPackage(data: CreatePackageDTO, image: Express.Multer.File): Promise<PackageEntity>;
    updatePackage(id: string, data: UpdatePackageDTO, image: Express.Multer.File): Promise<string>;
    confirmPackage(id: string): Promise<string>;
    deletePackage(id: string): Promise<string>;
    getActivePackageByCategory(categoryId: string): Promise<PackageEntity[]>;
}
