import { Repository } from 'typeorm';
import { BaseService } from '../base/base.service';
import { FoodCategoryEntity } from './entities/food-categories.entity';
import { UpdateFoodCategoryDTO } from './dto/update-food-category';
export declare class FoodCategoriesService extends BaseService<FoodCategoryEntity> {
    private readonly categoriesRepository;
    constructor(categoriesRepository: Repository<FoodCategoryEntity>);
    getCategories(): Promise<FoodCategoryEntity[]>;
    updateCategory(id: string, data: UpdateFoodCategoryDTO): Promise<string>;
    deleteCategoryById(id: string): Promise<string>;
}
