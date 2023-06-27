import { RoleEntity } from 'src/models/roles/entities/role.entity';
import { Repository } from 'typeorm';
export declare class RolesSeederService {
    private readonly roleRepository;
    constructor(roleRepository: Repository<RoleEntity>);
    createRole(): Promise<void>;
}
