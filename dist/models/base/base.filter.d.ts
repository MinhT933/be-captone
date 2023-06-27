import { SortEnum } from 'src/common/enums/sort.enum';
export declare class BaseFilter {
    sizePage: number;
    currentPage: number;
    sort: SortEnum;
}
export declare class IPaginate<T> {
    data: T[];
    count: number;
    currentPage: number;
    nextPage: number;
    prevPage: number;
    lastPage: number;
}
export declare function paginate<T>(data: [T[], number], page: number, limit: number): IPaginate<T>;
