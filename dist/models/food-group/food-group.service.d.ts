import { Repository } from 'typeorm';
import { BaseService } from '../base/base.service';
import { FoodGroupEntity } from './entities/food-group.entity';
import { CreateFoodGroupDTO } from './dto/create-food-group.dto';
import { FoodsService } from '../foods/foods.service';
import { UpdateFoodGroupDTO } from './dto/update-food-group.dto';
import { FoodGroupFilterDTO } from './dto/foodGroup-filter.dto';
export declare class FoodGroupService extends BaseService<FoodGroupEntity> {
    private readonly foodGroupRepository;
    private readonly foodsService;
    constructor(foodGroupRepository: Repository<FoodGroupEntity>, foodsService: FoodsService);
    getAllFoodGroup(): Promise<FoodGroupEntity[]>;
    getFoodGroupByStatus(foodGroupFilter: FoodGroupFilterDTO): Promise<FoodGroupEntity[]>;
    createFoodGroup(data: CreateFoodGroupDTO): Promise<FoodGroupEntity>;
    updateFoodGroup(id: string, data: UpdateFoodGroupDTO): Promise<string>;
    updateFoodGroupStatus(id: string): Promise<string>;
    removeFoodGroup(id: string): Promise<string>;
}
