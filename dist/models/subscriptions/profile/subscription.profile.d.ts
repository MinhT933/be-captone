import { Mapper, MappingProfile } from '@automapper/core';
import { AutomapperProfile } from '@automapper/nestjs';
export declare class SubscriptionProfile extends AutomapperProfile {
    get profile(): MappingProfile;
    constructor(mapper: Mapper);
}
