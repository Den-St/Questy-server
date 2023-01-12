import { UserEntity } from './user.entity';
export declare class RoleEntity {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    value: string;
    users: UserEntity[];
}
