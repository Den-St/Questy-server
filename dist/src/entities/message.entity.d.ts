import { QuestionEntity } from 'src/entities/question.entity';
import { UserEntity } from 'src/entities/user.entity';
export declare class MessageEntity {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    creator: UserEntity;
    text: string;
    responseId: number;
    responseText: string;
    pinnedQuestion: QuestionEntity;
}
