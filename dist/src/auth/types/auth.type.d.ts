import { RoleEntity } from "../../entities/role.entity";
export declare class AuthType {
    token: string;
    name: string;
    id: number;
    email: string;
    roles: RoleEntity[];
}
