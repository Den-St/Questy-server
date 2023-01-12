import { HashTagEntity } from './hash-tag.entity';
import { UserEntity } from './user.entity';
export declare class QuestionTemplateEntity {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    body: string;
    hashTags: HashTagEntity[];
    creator: UserEntity;
}
