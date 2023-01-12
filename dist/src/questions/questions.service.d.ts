import { SeeAnswersDto } from './dto/see-answers.dto';
import { SubscribeDto } from './dto/subscribe.dto';
import { GetByUserIdPaginatedDto } from 'src/answers/dto/getByUserIdPaginated.dto';
import { HashTagsService } from './../hash-tags/hash-tags.service';
import { HashTagEntity } from './../entities/hash-tag.entity';
import { UsersService } from 'src/users/users.service';
import { CreateQuestionDto } from './dto/create.dto';
import { AnswerEntity } from '../entities/answer.entity';
import { QuestionEntity } from '../entities/question.entity';
import { Repository } from 'typeorm';
import { GetPaginatedQuestions } from 'src/hash-tags/dto/getPaginatedQuestions.dto';
import { RateQuestionDto } from './dto/rateUp.dto';
import { ViewDto } from './dto/view.dto';
export declare class QuestionsService {
    private readonly questionsRepository;
    private readonly usersService;
    private readonly hashTagsService;
    constructor(questionsRepository: Repository<QuestionEntity>, usersService: UsersService, hashTagsService: HashTagsService);
    getByIdWithAnswers(id: number): Promise<QuestionEntity>;
    getByIdWithAnswersAndSubscribers(id: number): Promise<QuestionEntity>;
    addAnswer(id: number, answer: AnswerEntity): Promise<{
        answers: AnswerEntity[];
        answersNumber: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        body: string;
        hashTags: HashTagEntity[];
        creator: import("../entities/user.entity").UserEntity;
        rating: number;
        haveCorrectAnswer: boolean;
        views: number;
        ratedUpUsers: import("../entities/user.entity").UserEntity[];
        ratedDownUsers: import("../entities/user.entity").UserEntity[];
        viewers: import("../entities/user.entity").UserEntity[];
        subscribers: import("../entities/user.entity").UserEntity[];
    } & QuestionEntity>;
    getByUserId(id: number): Promise<QuestionEntity[]>;
    create(dto: CreateQuestionDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        body: string;
        hashTags: HashTagEntity[];
        creator: import("../entities/user.entity").UserEntity;
        answers: AnswerEntity[];
        rating: number;
        haveCorrectAnswer: boolean;
        answersNumber: number;
        views: number;
        ratedUpUsers: import("../entities/user.entity").UserEntity[];
        ratedDownUsers: import("../entities/user.entity").UserEntity[];
        viewers: import("../entities/user.entity").UserEntity[];
        subscribers: import("../entities/user.entity").UserEntity[];
    } & QuestionEntity>;
    getByUserIdPaginated(dto: GetByUserIdPaginatedDto): Promise<{
        questions: QuestionEntity[];
        total: number;
    }>;
    getPaginatedQuestions(dto: GetPaginatedQuestions): Promise<{
        questions: QuestionEntity[];
        total: number;
    }>;
    get(id: number): Promise<QuestionEntity>;
    rateUp(dto: RateQuestionDto): Promise<{
        rating: number;
        ratedUpUsers: import("../entities/user.entity").UserEntity[];
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        body: string;
        hashTags: HashTagEntity[];
        creator: import("../entities/user.entity").UserEntity;
        answers: AnswerEntity[];
        haveCorrectAnswer: boolean;
        answersNumber: number;
        views: number;
        ratedDownUsers: import("../entities/user.entity").UserEntity[];
        viewers: import("../entities/user.entity").UserEntity[];
        subscribers: import("../entities/user.entity").UserEntity[];
    } & QuestionEntity>;
    rateDown(dto: RateQuestionDto): Promise<{
        rating: number;
        ratedDownUsers: import("../entities/user.entity").UserEntity[];
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        body: string;
        hashTags: HashTagEntity[];
        creator: import("../entities/user.entity").UserEntity;
        answers: AnswerEntity[];
        haveCorrectAnswer: boolean;
        answersNumber: number;
        views: number;
        ratedUpUsers: import("../entities/user.entity").UserEntity[];
        viewers: import("../entities/user.entity").UserEntity[];
        subscribers: import("../entities/user.entity").UserEntity[];
    } & QuestionEntity>;
    cancelRating(dto: RateQuestionDto): Promise<{
        rating: number;
        ratedUpUsers: import("../entities/user.entity").UserEntity[];
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        body: string;
        hashTags: HashTagEntity[];
        creator: import("../entities/user.entity").UserEntity;
        answers: AnswerEntity[];
        haveCorrectAnswer: boolean;
        answersNumber: number;
        views: number;
        ratedDownUsers: import("../entities/user.entity").UserEntity[];
        viewers: import("../entities/user.entity").UserEntity[];
        subscribers: import("../entities/user.entity").UserEntity[];
    } & QuestionEntity>;
    view(dto: ViewDto): Promise<{
        viewers: import("../entities/user.entity").UserEntity[];
        views: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        body: string;
        hashTags: HashTagEntity[];
        creator: import("../entities/user.entity").UserEntity;
        answers: AnswerEntity[];
        rating: number;
        haveCorrectAnswer: boolean;
        answersNumber: number;
        ratedUpUsers: import("../entities/user.entity").UserEntity[];
        ratedDownUsers: import("../entities/user.entity").UserEntity[];
        subscribers: import("../entities/user.entity").UserEntity[];
    } & QuestionEntity>;
    save(question: QuestionEntity): Promise<QuestionEntity>;
    subscribe(dto: SubscribeDto): Promise<{
        subscribers: import("../entities/user.entity").UserEntity[];
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        body: string;
        hashTags: HashTagEntity[];
        creator: import("../entities/user.entity").UserEntity;
        answers: AnswerEntity[];
        rating: number;
        haveCorrectAnswer: boolean;
        answersNumber: number;
        views: number;
        ratedUpUsers: import("../entities/user.entity").UserEntity[];
        ratedDownUsers: import("../entities/user.entity").UserEntity[];
        viewers: import("../entities/user.entity").UserEntity[];
    } & QuestionEntity>;
    unsubscribe(dto: SubscribeDto): Promise<Partial<import("../entities/user.entity").UserEntity> & import("../entities/user.entity").UserEntity>;
    seeAnswers(dto: SeeAnswersDto): Promise<Partial<import("../entities/user.entity").UserEntity> & import("../entities/user.entity").UserEntity>;
}
