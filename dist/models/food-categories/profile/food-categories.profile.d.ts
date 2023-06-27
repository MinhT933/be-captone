import { MappingProfile, Mapper } from '@automapper/core';
import { AutomapperProfile } from '@automapper/nestjs';
export declare class FoodCategoriesProfile extends AutomapperProfile {
    get profile(): MappingProfile;
    constructor(mapper: Mapper);
}
