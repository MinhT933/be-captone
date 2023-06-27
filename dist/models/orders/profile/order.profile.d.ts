import { AutomapperProfile } from '@automapper/nestjs';
import { Mapper, MappingProfile } from '@automapper/core';
export declare class OrderProfile extends AutomapperProfile {
    get profile(): MappingProfile;
    constructor(mapper: Mapper);
}
