import { MessageEntity } from './message.entity';
import { AnswerEntity } from './answer.entity';
import { UserEntity } from 'src/entities/user.entity';
import { HashTagEntity } from './hash-tag.entity';
export declare class QuestionEntity {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    body: string;
    hashTags: HashTagEntity[];
    creator: UserEntity;
    answers: AnswerEntity[];
    rating: number;
    haveCorrectAnswer: boolean;
    answersNumber: number;
    views: number;
    ratedUpUsers: UserEntity[];
    ratedDownUsers: UserEntity[];
    viewers: UserEntity[];
    subscribers: UserEntity[];
    messages: MessageEntity[];
}
