import { AutomapperProfile } from '@automapper/nestjs';
import { Mapper, MappingProfile } from '@automapper/core';
export declare class BankProfile extends AutomapperProfile {
    constructor(mapper: Mapper);
    get profile(): MappingProfile;
}
