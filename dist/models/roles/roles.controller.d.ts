import { RoleEntity } from './entities/role.entity';
import { RolesService } from './roles.service';
export declare class RolesController {
    private readonly rolesService;
    constructor(rolesService: RolesService);
    getAll(): Promise<RoleEntity[]>;
}
