import { CreateFoodCategoryDTO } from './dto/create-food-category';
import { UpdateFoodCategoryDTO } from './dto/update-food-category';
import { FoodCategoryEntity } from './entities/food-categories.entity';
import { FoodCategoriesService } from './food-categories.service';
export declare class FoodCategoriesController {
    private readonly foodCategoriesService;
    constructor(foodCategoriesService: FoodCategoriesService);
    findAll(): Promise<FoodCategoryEntity[]>;
    findCategoryById(id: string): Promise<FoodCategoryEntity>;
    createCategory(createFoodCategory: CreateFoodCategoryDTO): Promise<FoodCategoryEntity>;
    updateCategory(id: string, update: UpdateFoodCategoryDTO): Promise<string>;
    removeCategory(id: string): Promise<string>;
}
