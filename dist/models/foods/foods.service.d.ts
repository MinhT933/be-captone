/// <reference types="multer" />
import { Repository } from 'typeorm';
import { BaseService } from '../base/base.service';
import { FoodEntity } from './entities/foods.entity';
import { FoodCategoriesService } from '../food-categories/food-categories.service';
import { CreateFoodDTO } from './dto/create-food.dto';
import { UpdateFoodDTO } from './dto/update-food.dto';
import { FoodFilter, FoodFilterDTO, FoodFindByPackage } from './dto/food-filter.dto';
import { FoodDTO } from './dto/food.dto';
export declare class FoodsService extends BaseService<FoodEntity> {
    private readonly foodsRepository;
    private readonly foodCategoryService;
    constructor(foodsRepository: Repository<FoodEntity>, foodCategoryService: FoodCategoriesService);
    getFoodOnPackage(id: FoodFindByPackage): Promise<FoodDTO[]>;
    getFoodOnSession(id: string): Promise<FoodDTO[]>;
    getAllFood(): Promise<FoodEntity[]>;
    getFoodByStatus(foodFilter: FoodFilterDTO): Promise<FoodEntity[]>;
    getFoodByCateFilter(filter: FoodFilter): Promise<FoodEntity[]>;
    getFoodByCategory(idCate: string): Promise<FoodEntity[]>;
    createFood(data: CreateFoodDTO, image: Express.Multer.File): Promise<FoodEntity>;
    updateFood(id: string, data: UpdateFoodDTO, image: Express.Multer.File): Promise<string>;
    updateStatusFood(id: string): Promise<string>;
}
