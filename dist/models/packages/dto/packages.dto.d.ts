import { PackageCategoryDTO } from 'src/models/package-categories/dto/package-category.dto';
import { PackageItemDTO } from 'src/models/package-item/dto/package-item.dto';
import { BaseDTO } from '../../base/base.dto';
export declare class PackageDTO extends BaseDTO {
    startSale: Date;
    endSale: Date;
    name: string;
    description: string;
    price: number;
    image: string;
    totalDate: number;
    totalMeal: number;
    status: string;
    packageCategory: PackageCategoryDTO;
    packageItem: PackageItemDTO;
}
