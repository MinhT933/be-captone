import { Repository } from 'typeorm';
import { RoleEntity } from './entities/role.entity';
import { BaseService } from 'src/models/base/base.service';
export declare class RolesService extends BaseService<RoleEntity> {
    private rolesRepository;
    constructor(rolesRepository: Repository<RoleEntity>);
}
