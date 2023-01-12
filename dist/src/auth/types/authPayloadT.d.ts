import { AvatarEntity } from '../../entities/avatar.entity';
import { RoleEntity } from "../../entities/role.entity";
export declare class authPayloadT {
    id: number;
    email: string;
    name: string;
    roles: RoleEntity[];
    avatar: AvatarEntity;
}
