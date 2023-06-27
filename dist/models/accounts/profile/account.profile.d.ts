import { Mapper, MappingProfile } from '@automapper/core';
import { AutomapperProfile } from '@automapper/nestjs';
export declare class AccountProfile extends AutomapperProfile {
    constructor(mapper: Mapper);
    get profile(): MappingProfile;
}
