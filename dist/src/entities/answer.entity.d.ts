import { UserEntity } from 'src/entities/user.entity';
import { QuestionEntity } from './question.entity';
export declare class AnswerEntity {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    text: string;
    creator: UserEntity;
    question: QuestionEntity;
    rating: number;
    correct: boolean;
    ratedUpUsers: UserEntity[];
    ratedDownUsers: UserEntity[];
    subscribersWhoHaveNotSeen: UserEntity[];
}
