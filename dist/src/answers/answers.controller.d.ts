import { CreateAnswerDto } from './dto/create.dto';
import { AnswersService } from './answers.service';
import { GetByUserIdPaginatedDto } from './dto/getByUserIdPaginated.dto';
import { RateAnswerDto } from './dto/rate-answer.dto';
export declare class AnswersController {
    private readonly answersService;
    constructor(answersService: AnswersService);
    create(dto: CreateAnswerDto): Promise<{
        creator: {
            answers: import("../entities/answer.entity").AnswerEntity[];
            numberOfAnswers: number;
            notSeenAnswers: import("../entities/answer.entity").AnswerEntity[];
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
            ratedUpAnswers: import("../entities/answer.entity").AnswerEntity[];
            ratedDownAnswers: import("../entities/answer.entity").AnswerEntity[];
            subscribedQuestions: import("../entities/question.entity").QuestionEntity[];
            correctAnswersOnSubscribedQuestions: import("../entities/answer.entity").AnswerEntity[];
            createdCommunities: import("../entities/community.entity").CommunityEntity[];
            communities: import("../entities/community.entity").CommunityEntity[];
            messages: import("../entities/message.entity").MessageEntity[];
        } & import("../entities/user.entity").UserEntity;
        question: {
            answers: import("../entities/answer.entity").AnswerEntity[];
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
    } & import("../entities/answer.entity").AnswerEntity>;
    getByUserId(id: number): Promise<import("../entities/answer.entity").AnswerEntity[]>;
    getByUserIdPaginated(dto: GetByUserIdPaginatedDto): Promise<{
        total: number;
        answers: import("../entities/answer.entity").AnswerEntity[];
    }>;
    getByQuestionId(id: number): Promise<import("../entities/answer.entity").AnswerEntity[]>;
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
    } & import("../entities/answer.entity").AnswerEntity>;
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
    } & import("../entities/answer.entity").AnswerEntity>;
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
    } & import("../entities/answer.entity").AnswerEntity>;
    correct(dto: {
        answerId: number;
    }): Promise<{
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
    } & import("../entities/answer.entity").AnswerEntity>;
}
