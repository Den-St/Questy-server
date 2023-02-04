import { UsersService } from 'src/users/users.service';
import { GetByUserIdPaginatedDto } from './../answers/dto/getByUserIdPaginated.dto';
import { HashTagEntity } from '../entities/hash-tag.entity';
import { Repository } from 'typeorm';
import { CreateHashTagDto } from './dto/create.dto';
import { GetPaginatedDto } from 'src/users/dto/GetPaginated.dto';
import { UserEntity } from 'src/entities/user.entity';
export declare class HashTagsService {
    private readonly hashtagRepository;
    private readonly userService;
    constructor(hashtagRepository: Repository<HashTagEntity>, userService: UsersService);
    getById(id: number): Promise<HashTagEntity>;
    save(dto: HashTagEntity): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        followers: UserEntity[];
        followersNumber: number;
        questions: import("../entities/question.entity").QuestionEntity[];
        questionsNumber: number;
        creator: UserEntity;
        questionTemplates: import("../entities/question-template.entity").QuestionTemplateEntity[];
        description: string;
        communities: import("../entities/community.entity").CommunityEntity[];
    } & HashTagEntity>;
    create(dto: CreateHashTagDto): Promise<HashTagEntity>;
    getByName(name: string): Promise<HashTagEntity>;
    getByNameWithInUsed(name: string): Promise<HashTagEntity>;
    upPopularity(id: number): Promise<{
        followersNumber: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        followers: UserEntity[];
        questions: import("../entities/question.entity").QuestionEntity[];
        questionsNumber: number;
        creator: UserEntity;
        questionTemplates: import("../entities/question-template.entity").QuestionTemplateEntity[];
        description: string;
        communities: import("../entities/community.entity").CommunityEntity[];
    } & HashTagEntity>;
    searchByName(name: string): Promise<HashTagEntity[]>;
    getByNameAndIncreaseQuestionNumber(name: string): Promise<HashTagEntity>;
    getCreatedHashTagsPaginated(dto: GetByUserIdPaginatedDto): Promise<{
        hashTags: HashTagEntity[];
        total: number;
    }>;
    getPaginated(dto: GetPaginatedDto): Promise<{
        hashTags: HashTagEntity[];
        total: number;
    }>;
    getWithFollowers(id: number): Promise<HashTagEntity>;
    addFollower(dto: {
        user: UserEntity;
        hashTagId: number;
    }): Promise<{
        followersNumber: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        followers: UserEntity[];
        questions: import("../entities/question.entity").QuestionEntity[];
        questionsNumber: number;
        creator: UserEntity;
        questionTemplates: import("../entities/question-template.entity").QuestionTemplateEntity[];
        description: string;
        communities: import("../entities/community.entity").CommunityEntity[];
    } & HashTagEntity>;
    removeFollower(dto: {
        userId: number;
        hashTagId: number;
    }): Promise<{
        followersNumber: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        followers: UserEntity[];
        questions: import("../entities/question.entity").QuestionEntity[];
        questionsNumber: number;
        creator: UserEntity;
        questionTemplates: import("../entities/question-template.entity").QuestionTemplateEntity[];
        description: string;
        communities: import("../entities/community.entity").CommunityEntity[];
    } & HashTagEntity>;
    getByIdWithCommunities(id: number): Promise<HashTagEntity>;
}
