import { HashTagEntity } from 'src/entities/hash-tag.entity';
import { UserEntity } from 'src/entities/user.entity';
export declare class CommunityEntity {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    creator: UserEntity;
    members: UserEntity[];
    hashTags: HashTagEntity[];
    name: string;
    membersNumber: number;
}
