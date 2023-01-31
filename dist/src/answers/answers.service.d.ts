import { GetByUserIdPaginatedDto } from './dto/getByUserIdPaginated.dto';
import { QuestionsService } from '../questions/questions.service';
import { AnswerEntity } from '../entities/answer.entity';
import { Repository } from 'typeorm';
import { CreateAnswerDto } from './dto/create.dto';
import { UsersService } from 'src/users/users.service';
import { RateAnswerDto } from './dto/rate-answer.dto';
export declare class AnswersService {
    private readonly answersRepository;
    private readonly questionsService;
    private readonly usersService;
    constructor(answersRepository: Repository<AnswerEntity>, questionsService: QuestionsService, usersService: UsersService);
    create(dto: CreateAnswerDto): Promise<{
        creator: {
            answers: AnswerEntity[];
            numberOfAnswers: number;
            notSeenAnswers: AnswerEntity[];
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            gender: string;
            favoriteHashTags: import("../entities/hash-tag.entity").HashTagEntity[];
            email: string;
            occasion: string;
            birthdate: string;
            passwordHash: string;
            roles: import("../entities/role.entity").RoleEntity[];
            questions: import("../entities/question.entity").QuestionEntity[];
            numberOfQuestions: number;
            rating: number;
            location: string;
            avatar: import("../entities/avatar.entity").AvatarEntity;
            isDeleted: boolean;
            about: string;
            createdHashTags: import("../entities/hash-tag.entity").HashTagEntity[];
            questionTemplates: import("../entities/question-template.entity").QuestionTemplateEntity[];
            ratedUpQuestions: import("../entities/question.entity").QuestionEntity[];
            ratedDownQuestions: import("../entities/question.entity").QuestionEntity[];
            viewedQuestions: import("../entities/question.entity").QuestionEntity[];
            ratedUpAnswers: AnswerEntity[];
            ratedDownAnswers: AnswerEntity[];
            subscribedQuestions: import("../entities/question.entity").QuestionEntity[];
            correctAnswersOnSubscribedQuestions: AnswerEntity[];
            createdCommunities: import("../entities/community.entity").CommunityEntity[];
            communities: import("../entities/community.entity").CommunityEntity[];
            messages: import("../entities/message.entity").MessageEntity[];
        } & import("../entities/user.entity").UserEntity;
        question: {
            answers: AnswerEntity[];
            answersNumber: number;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            body: string;
            hashTags: import("../entities/hash-tag.entity").HashTagEntity[];
            creator: import("../entities/user.entity").UserEntity;
            rating: number;
            haveCorrectAnswer: boolean;
            views: number;
            ratedUpUsers: import("../entities/user.entity").UserEntity[];
            ratedDownUsers: import("../entities/user.entity").UserEntity[];
            viewers: import("../entities/user.entity").UserEntity[];
            subscribers: import("../entities/user.entity").UserEntity[];
            messages: import("../entities/message.entity").MessageEntity[];
        } & import("../entities/question.entity").QuestionEntity;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        text: string;
        rating: number;
        correct: boolean;
        ratedUpUsers: import("../entities/user.entity").UserEntity[];
        ratedDownUsers: import("../entities/user.entity").UserEntity[];
        subscribersWhoHaveNotSeen: import("../entities/user.entity").UserEntity[];
        subscribers: import("../entities/user.entity").UserEntity[];
    } & AnswerEntity>;
    getByUserId(id: number): Promise<AnswerEntity[]>;
    getByUserIdPaginated(dto: GetByUserIdPaginatedDto): Promise<{
        total: number;
        answers: AnswerEntity[];
    }>;
    getByQuestionId(id: number): Promise<AnswerEntity[]>;
    rateUp(dto: RateAnswerDto): Promise<{
        rating: number;
        ratedUpUsers: import("../entities/user.entity").UserEntity[];
        id: number;
        createdAt: Date;
        updatedAt: Date;
        text: string;
        creator: import("../entities/user.entity").UserEntity;
        question: import("../entities/question.entity").QuestionEntity;
        correct: boolean;
        ratedDownUsers: import("../entities/user.entity").UserEntity[];
        subscribersWhoHaveNotSeen: import("../entities/user.entity").UserEntity[];
        subscribers: import("../entities/user.entity").UserEntity[];
    } & AnswerEntity>;
    rateDown(dto: RateAnswerDto): Promise<{
        rating: number;
        ratedDownUsers: import("../entities/user.entity").UserEntity[];
        id: number;
        createdAt: Date;
        updatedAt: Date;
        text: string;
        creator: import("../entities/user.entity").UserEntity;
        question: import("../entities/question.entity").QuestionEntity;
        correct: boolean;
        ratedUpUsers: import("../entities/user.entity").UserEntity[];
        subscribersWhoHaveNotSeen: import("../entities/user.entity").UserEntity[];
        subscribers: import("../entities/user.entity").UserEntity[];
    } & AnswerEntity>;
    cancelRating(dto: RateAnswerDto): Promise<{
        rating: number;
        ratedUpUsers: import("../entities/user.entity").UserEntity[];
        id: number;
        createdAt: Date;
        updatedAt: Date;
        text: string;
        creator: import("../entities/user.entity").UserEntity;
        question: import("../entities/question.entity").QuestionEntity;
        correct: boolean;
        ratedDownUsers: import("../entities/user.entity").UserEntity[];
        subscribersWhoHaveNotSeen: import("../entities/user.entity").UserEntity[];
        subscribers: import("../entities/user.entity").UserEntity[];
    } & AnswerEntity>;
    correct(id: number): Promise<{
        correct: boolean;
        subscribers: import("../entities/user.entity").UserEntity[];
        id: number;
        createdAt: Date;
        updatedAt: Date;
        text: string;
        creator: import("../entities/user.entity").UserEntity;
        question: import("../entities/question.entity").QuestionEntity;
        rating: number;
        ratedUpUsers: import("../entities/user.entity").UserEntity[];
        ratedDownUsers: import("../entities/user.entity").UserEntity[];
        subscribersWhoHaveNotSeen: import("../entities/user.entity").UserEntity[];
    } & AnswerEntity>;
}
