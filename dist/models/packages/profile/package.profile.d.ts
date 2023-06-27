import { MappingProfile, Mapper } from '@automapper/core';
import { AutomapperProfile } from '@automapper/nestjs';
export declare class PackageProfile extends AutomapperProfile {
    get profile(): MappingProfile;
    constructor(mapper: Mapper);
}
