import { UserEntity } from 'src/entities/user.entity';
export declare class AvatarEntity {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    path: string;
    user: UserEntity;
}
