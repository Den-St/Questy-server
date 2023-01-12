import { RoleEntity } from '../entities/role.entity';
import { Repository } from 'typeorm';
export declare class RolesService {
    private readonly rolesRepository;
    constructor(rolesRepository: Repository<RoleEntity>);
    create(value: string): Promise<RoleEntity>;
    get(value: string): Promise<RoleEntity>;
}
