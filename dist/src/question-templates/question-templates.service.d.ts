import { EditDto } from './dto/edit.dto';
import { UsersService } from 'src/users/users.service';
import { QuestionTemplateEntity } from './../entities/question-template.entity';
import { Repository } from 'typeorm';
import { CreateDto } from './dto/createDto';
import { HashTagsService } from 'src/hash-tags/hash-tags.service';
import { HashTagEntity } from 'src/entities/hash-tag.entity';
export declare class QuestionTemplatesService {
    private readonly questionTemplatesRepository;
    private readonly usersService;
    private readonly hashTagsService;
    constructor(questionTemplatesRepository: Repository<QuestionTemplateEntity>, usersService: UsersService, hashTagsService: HashTagsService);
    create(dto: CreateDto): Promise<{
        creator: import("../entities/user.entity").UserEntity;
        hashTags: HashTagEntity[];
        body: string;
        title: string;
    } & QuestionTemplateEntity>;
    get(id: number): Promise<QuestionTemplateEntity>;
    getAllByUserId(userId: number): Promise<QuestionTemplateEntity[]>;
    edit(dto: EditDto): Promise<{
        title: string;
        body: string;
        hashTags: HashTagEntity[];
        id: number;
        createdAt: Date;
        updatedAt: Date;
        creator: import("../entities/user.entity").UserEntity;
    } & QuestionTemplateEntity>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
