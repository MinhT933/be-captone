import { InActiveEnum } from 'src/common/enums/active.enum';
export declare class FoodFilterDTO {
    statusFood: InActiveEnum;
}
export declare class FoodFilter {
    categoryId: string;
    status: InActiveEnum;
}
export declare class FoodFindByPackage {
    packageId: string;
}
