/// <reference types="multer" />
import { CreateFoodDTO } from './dto/create-food.dto';
import { FoodFilter, FoodFilterDTO, FoodFindByPackage } from './dto/food-filter.dto';
import { FoodDTO } from './dto/food.dto';
import { UpdateFoodDTO } from './dto/update-food.dto';
import { FoodEntity } from './entities/foods.entity';
import { FoodsService } from './foods.service';
export declare class FoodsController {
    private readonly foodsService;
    constructor(foodsService: FoodsService);
    findAll(): Promise<FoodEntity[]>;
    findFoodOnPackage(find: FoodFindByPackage): Promise<FoodDTO[]>;
    findFoodOnSession(id: string): Promise<FoodDTO[]>;
    findByCategoryFilter(filter: FoodFilter): Promise<FoodEntity[]>;
    getFoodByStatus(foodFilter: FoodFilterDTO): Promise<FoodEntity[]>;
    findFoodById(id: string): Promise<FoodEntity>;
    findFoodByCategory(idCate: string): Promise<FoodEntity[]>;
    createFood(createFoodDTO: CreateFoodDTO, image: Express.Multer.File): Promise<FoodEntity>;
    updateFood(id: string, updateFood: UpdateFoodDTO, image: Express.Multer.File): Promise<string>;
    updateStatusFood(id: string): Promise<string>;
}
