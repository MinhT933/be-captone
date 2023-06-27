import { BaseEntity } from 'src/models/base/base.entity';
import { PackageEntity } from 'src/models/packages/entities/packages.entity';
export declare class PackageCategoryEntity extends BaseEntity {
    name: string;
    image: string;
    packages: PackageEntity[];
}
