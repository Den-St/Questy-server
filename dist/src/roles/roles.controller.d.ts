import { RolesService } from './roles.service';
import { GetRoleDto } from './dto/get.dto';
import { CreateRoleDto } from './dto/create.dto';
export declare class RolesController {
    private readonly rolesService;
    constructor(rolesService: RolesService);
    create(dto: CreateRoleDto): Promise<import("../entities/role.entity").RoleEntity>;
    get(dto: GetRoleDto): Promise<import("../entities/role.entity").RoleEntity>;
}
