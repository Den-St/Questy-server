import { PaginatedMembersDto } from './../community/dto/paginatedMembers.dto';
import { SetUserDetailedInfoDto } from './dto/set-detailed-info.dto';
import { CreateUserDto } from './dto/create.dto';
import { UsersService } from './users.service';
import { GetPaginatedDto } from './dto/GetPaginated.dto';
export declare class UsersController {
    readonly usersService: UsersService;
    constructor(usersService: UsersService);
    create(dto: CreateUserDto): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        gender: string;
        favoriteHashTags: import("../entities/hash-tag.entity").HashTagEntity[];
        email: string;
        occasion: string;
        birthdate: string;
        passwordHash: string;
        roles: import("../entities/role.entity").RoleEntity[];
        questions: import("../entities/question.entity").QuestionEntity[];
        answers: import("../entities/answer.entity").AnswerEntity[];
        numberOfAnswers: number;
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
        notSeenAnswers: import("../entities/answer.entity").AnswerEntity[];
        correctAnswersOnSubscribedQuestions: import("../entities/answer.entity").AnswerEntity[];
        createdCommunities: import("../entities/community.entity").CommunityEntity[];
        communities: import("../entities/community.entity").CommunityEntity[];
        messages: import("../entities/message.entity").MessageEntity[];
    } & import("../entities/user.entity").UserEntity>;
    setDetailedInfo(dto: SetUserDetailedInfoDto): Promise<{
        user: {
            name: string;
            favoriteHashTags: import("../entities/hash-tag.entity").HashTagEntity[];
            gender: string;
            avatar: import("../entities/avatar.entity").AvatarEntity;
            occasion: string;
            birthdate: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            passwordHash: string;
            roles: import("../entities/role.entity").RoleEntity[];
            questions: import("../entities/question.entity").QuestionEntity[];
            answers: import("../entities/answer.entity").AnswerEntity[];
            numberOfAnswers: number;
            numberOfQuestions: number;
            rating: number;
            location: string;
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
            notSeenAnswers: import("../entities/answer.entity").AnswerEntity[];
            correctAnswersOnSubscribedQuestions: import("../entities/answer.entity").AnswerEntity[];
            createdCommunities: import("../entities/community.entity").CommunityEntity[];
            communities: import("../entities/community.entity").CommunityEntity[];
            messages: import("../entities/message.entity").MessageEntity[];
        } & import("../entities/user.entity").UserEntity;
        token: string;
    }>;
    getAllPaginate(dto: GetPaginatedDto): Promise<{
        users: import("../entities/user.entity").UserEntity[];
        total: number;
    }>;
    getById(id: number): Promise<import("../entities/user.entity").UserEntity>;
    edit(dto: SetUserDetailedInfoDto): Promise<{
        user: {
            name: string;
            favoriteHashTags: import("../entities/hash-tag.entity").HashTagEntity[];
            gender: string;
            avatar: import("../entities/avatar.entity").AvatarEntity;
            occasion: string;
            birthdate: string;
            location: string;
            about: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            roles: import("../entities/role.entity").RoleEntity[];
            questions: import("../entities/question.entity").QuestionEntity[];
            answers: import("../entities/answer.entity").AnswerEntity[];
            numberOfAnswers: number;
            numberOfQuestions: number;
            rating: number;
            isDeleted: boolean;
            createdHashTags: import("../entities/hash-tag.entity").HashTagEntity[];
            questionTemplates: import("../entities/question-template.entity").QuestionTemplateEntity[];
            ratedUpQuestions: import("../entities/question.entity").QuestionEntity[];
            ratedDownQuestions: import("../entities/question.entity").QuestionEntity[];
            viewedQuestions: import("../entities/question.entity").QuestionEntity[];
            ratedUpAnswers: import("../entities/answer.entity").AnswerEntity[];
            ratedDownAnswers: import("../entities/answer.entity").AnswerEntity[];
            subscribedQuestions: import("../entities/question.entity").QuestionEntity[];
            notSeenAnswers: import("../entities/answer.entity").AnswerEntity[];
            correctAnswersOnSubscribedQuestions: import("../entities/answer.entity").AnswerEntity[];
            createdCommunities: import("../entities/community.entity").CommunityEntity[];
            communities: import("../entities/community.entity").CommunityEntity[];
            messages: import("../entities/message.entity").MessageEntity[];
        };
        token: string;
    }>;
    softDelete(id: number): Promise<{
        isDeleted: true;
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
        answers: import("../entities/answer.entity").AnswerEntity[];
        numberOfAnswers: number;
        numberOfQuestions: number;
        rating: number;
        location: string;
        avatar: import("../entities/avatar.entity").AvatarEntity;
        about: string;
        createdHashTags: import("../entities/hash-tag.entity").HashTagEntity[];
        questionTemplates: import("../entities/question-template.entity").QuestionTemplateEntity[];
        ratedUpQuestions: import("../entities/question.entity").QuestionEntity[];
        ratedDownQuestions: import("../entities/question.entity").QuestionEntity[];
        viewedQuestions: import("../entities/question.entity").QuestionEntity[];
        ratedUpAnswers: import("../entities/answer.entity").AnswerEntity[];
        ratedDownAnswers: import("../entities/answer.entity").AnswerEntity[];
        subscribedQuestions: import("../entities/question.entity").QuestionEntity[];
        notSeenAnswers: import("../entities/answer.entity").AnswerEntity[];
        correctAnswersOnSubscribedQuestions: import("../entities/answer.entity").AnswerEntity[];
        createdCommunities: import("../entities/community.entity").CommunityEntity[];
        communities: import("../entities/community.entity").CommunityEntity[];
        messages: import("../entities/message.entity").MessageEntity[];
    } & import("../entities/user.entity").UserEntity>;
    getNotSeenAnswers(id: number): Promise<import("../entities/user.entity").UserEntity>;
    getCorrectAnswers(id: number): Promise<import("../entities/user.entity").UserEntity>;
    getFavoriteHashTags(id: number): Promise<import("../entities/user.entity").UserEntity>;
    removeFavoriteHashTag(dto: {
        userId: number;
        hashTagId: number;
    }): Promise<{
        user: {
            favoriteHashTags: import("../entities/hash-tag.entity").HashTagEntity[];
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            gender: string;
            email: string;
            occasion: string;
            birthdate: string;
            roles: import("../entities/role.entity").RoleEntity[];
            questions: import("../entities/question.entity").QuestionEntity[];
            answers: import("../entities/answer.entity").AnswerEntity[];
            numberOfAnswers: number;
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
            notSeenAnswers: import("../entities/answer.entity").AnswerEntity[];
            correctAnswersOnSubscribedQuestions: import("../entities/answer.entity").AnswerEntity[];
            createdCommunities: import("../entities/community.entity").CommunityEntity[];
            communities: import("../entities/community.entity").CommunityEntity[];
            messages: import("../entities/message.entity").MessageEntity[];
        };
        token: string;
    }>;
    addToFavoriteHashTag(dto: {
        userId: number;
        hashTagId: number;
    }): Promise<{
        user: {
            favoriteHashTags: import("../entities/hash-tag.entity").HashTagEntity[];
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            gender: string;
            email: string;
            occasion: string;
            birthdate: string;
            roles: import("../entities/role.entity").RoleEntity[];
            questions: import("../entities/question.entity").QuestionEntity[];
            answers: import("../entities/answer.entity").AnswerEntity[];
            numberOfAnswers: number;
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
            notSeenAnswers: import("../entities/answer.entity").AnswerEntity[];
            correctAnswersOnSubscribedQuestions: import("../entities/answer.entity").AnswerEntity[];
            createdCommunities: import("../entities/community.entity").CommunityEntity[];
            communities: import("../entities/community.entity").CommunityEntity[];
            messages: import("../entities/message.entity").MessageEntity[];
        };
        token: string;
    }>;
    getMembers(dto: PaginatedMembersDto): Promise<{
        members: import("../entities/user.entity").UserEntity[];
        total: number;
    }>;
}
