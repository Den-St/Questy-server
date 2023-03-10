import { SeeAnswersDto } from './dto/see-answers.dto';
import { ViewDto } from './dto/view.dto';
import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './dto/create.dto';
import { GetByUserIdPaginatedDto } from 'src/answers/dto/getByUserIdPaginated.dto';
import { GetPaginatedQuestions } from 'src/hash-tags/dto/getPaginatedQuestions.dto';
import { RateQuestionDto } from './dto/rateUp.dto';
import { SubscribeDto } from './dto/subscribe.dto';
export declare class QuestionsController {
    private readonly questionService;
    constructor(questionService: QuestionsService);
    getByUserId(dto: {
        id: number;
    }): Promise<import("../entities/question.entity").QuestionEntity[]>;
    create(dto: CreateQuestionDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        body: string;
        hashTags: import("../entities/hash-tag.entity").HashTagEntity[];
        creator: import("../entities/user.entity").UserEntity;
        answers: import("../entities/answer.entity").AnswerEntity[];
        rating: number;
        haveCorrectAnswer: boolean;
        answersNumber: number;
        views: number;
        ratedUpUsers: import("../entities/user.entity").UserEntity[];
        ratedDownUsers: import("../entities/user.entity").UserEntity[];
        viewers: import("../entities/user.entity").UserEntity[];
        subscribers: import("../entities/user.entity").UserEntity[];
        messages: import("../entities/message.entity").MessageEntity[];
    } & import("../entities/question.entity").QuestionEntity>;
    getByUserIdPaginated(dto: GetByUserIdPaginatedDto): Promise<{
        questions: import("../entities/question.entity").QuestionEntity[];
        total: number;
    }>;
    getPaginatedQuestions(dto: GetPaginatedQuestions): Promise<{
        questions: import("../entities/question.entity").QuestionEntity[];
        total: number;
    }>;
    get(dto: {
        id: number;
    }): Promise<import("../entities/question.entity").QuestionEntity>;
    rateUp(dto: RateQuestionDto): Promise<{
        rating: number;
        ratedUpUsers: import("../entities/user.entity").UserEntity[];
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        body: string;
        hashTags: import("../entities/hash-tag.entity").HashTagEntity[];
        creator: import("../entities/user.entity").UserEntity;
        answers: import("../entities/answer.entity").AnswerEntity[];
        haveCorrectAnswer: boolean;
        answersNumber: number;
        views: number;
        ratedDownUsers: import("../entities/user.entity").UserEntity[];
        viewers: import("../entities/user.entity").UserEntity[];
        subscribers: import("../entities/user.entity").UserEntity[];
        messages: import("../entities/message.entity").MessageEntity[];
    } & import("../entities/question.entity").QuestionEntity>;
    rateDown(dto: RateQuestionDto): Promise<{
        rating: number;
        ratedDownUsers: import("../entities/user.entity").UserEntity[];
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        body: string;
        hashTags: import("../entities/hash-tag.entity").HashTagEntity[];
        creator: import("../entities/user.entity").UserEntity;
        answers: import("../entities/answer.entity").AnswerEntity[];
        haveCorrectAnswer: boolean;
        answersNumber: number;
        views: number;
        ratedUpUsers: import("../entities/user.entity").UserEntity[];
        viewers: import("../entities/user.entity").UserEntity[];
        subscribers: import("../entities/user.entity").UserEntity[];
        messages: import("../entities/message.entity").MessageEntity[];
    } & import("../entities/question.entity").QuestionEntity>;
    cancelRating(dto: RateQuestionDto): Promise<{
        rating: number;
        ratedUpUsers: import("../entities/user.entity").UserEntity[];
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        body: string;
        hashTags: import("../entities/hash-tag.entity").HashTagEntity[];
        creator: import("../entities/user.entity").UserEntity;
        answers: import("../entities/answer.entity").AnswerEntity[];
        haveCorrectAnswer: boolean;
        answersNumber: number;
        views: number;
        ratedDownUsers: import("../entities/user.entity").UserEntity[];
        viewers: import("../entities/user.entity").UserEntity[];
        subscribers: import("../entities/user.entity").UserEntity[];
        messages: import("../entities/message.entity").MessageEntity[];
    } & import("../entities/question.entity").QuestionEntity>;
    view(dto: ViewDto): Promise<{
        viewers: import("../entities/user.entity").UserEntity[];
        views: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        body: string;
        hashTags: import("../entities/hash-tag.entity").HashTagEntity[];
        creator: import("../entities/user.entity").UserEntity;
        answers: import("../entities/answer.entity").AnswerEntity[];
        rating: number;
        haveCorrectAnswer: boolean;
        answersNumber: number;
        ratedUpUsers: import("../entities/user.entity").UserEntity[];
        ratedDownUsers: import("../entities/user.entity").UserEntity[];
        subscribers: import("../entities/user.entity").UserEntity[];
        messages: import("../entities/message.entity").MessageEntity[];
    } & import("../entities/question.entity").QuestionEntity>;
    subscribe(dto: SubscribeDto): Promise<{
        subscribers: import("../entities/user.entity").UserEntity[];
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        body: string;
        hashTags: import("../entities/hash-tag.entity").HashTagEntity[];
        creator: import("../entities/user.entity").UserEntity;
        answers: import("../entities/answer.entity").AnswerEntity[];
        rating: number;
        haveCorrectAnswer: boolean;
        answersNumber: number;
        views: number;
        ratedUpUsers: import("../entities/user.entity").UserEntity[];
        ratedDownUsers: import("../entities/user.entity").UserEntity[];
        viewers: import("../entities/user.entity").UserEntity[];
        messages: import("../entities/message.entity").MessageEntity[];
    } & import("../entities/question.entity").QuestionEntity>;
    unsubscribe(dto: SubscribeDto): Promise<Partial<import("../entities/user.entity").UserEntity> & import("../entities/user.entity").UserEntity>;
    seeAnswers(dto: SeeAnswersDto): Promise<Partial<import("../entities/user.entity").UserEntity> & import("../entities/user.entity").UserEntity>;
    globalSearch(dto: {
        name: string;
    }): Promise<{
        questions: import("../entities/question.entity").QuestionEntity[];
        users: import("../entities/user.entity").UserEntity[];
        hashTags: import("../entities/hash-tag.entity").HashTagEntity[];
    }>;
}
