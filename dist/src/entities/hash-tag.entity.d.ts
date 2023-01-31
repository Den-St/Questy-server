import { CommunityEntity } from './community.entity';
import { UserEntity } from 'src/entities/user.entity';
import { QuestionEntity } from './question.entity';
import { QuestionTemplateEntity } from './question-template.entity';
export declare class HashTagEntity {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    followers: UserEntity[];
    followersNumber: number;
    questions: QuestionEntity[];
    questionsNumber: number;
    creator: UserEntity;
    questionTemplates: QuestionTemplateEntity[];
    description: string;
    communities: CommunityEntity[];
}
