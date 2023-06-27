import { CreateFoodGroupDTO } from './dto/create-food-group.dto';
import { FoodGroupFilterDTO } from './dto/foodGroup-filter.dto';
import { UpdateFoodGroupDTO } from './dto/update-food-group.dto';
import { FoodGroupEntity } from './entities/food-group.entity';
import { FoodGroupService } from './food-group.service';
export declare class FoodGroupController {
    private readonly foodGroupService;
    constructor(foodGroupService: FoodGroupService);
    listAllFoodGroup(): Promise<FoodGroupEntity[]>;
    getFoodGroupByStatus(foodGroupFilter: FoodGroupFilterDTO): Promise<FoodGroupEntity[]>;
    findFoodById(id: string): Promise<FoodGroupEntity>;
    createFoodGroup(createDTO: CreateFoodGroupDTO): Promise<FoodGroupEntity>;
    updateFoodGroup(id: string, updateDTO: UpdateFoodGroupDTO): Promise<string>;
    updateFoodGroupStatus(id: string): Promise<string>;
    removeFoodGroup(id: string): Promise<string>;
}
