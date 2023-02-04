import { CreateDto } from './dto/createDto';
import { EditDto } from './dto/edit.dto';
import { QuestionTemplatesService } from './question-templates.service';
export declare class QuestionTemplatesController {
    private readonly questionTemplatesService;
    constructor(questionTemplatesService: QuestionTemplatesService);
    create(dto: CreateDto): Promise<{
        creator: import("../entities/user.entity").UserEntity;
        hashTags: import("../entities/hash-tag.entity").HashTagEntity[];
        body: string;
        title: string;
    } & import("../entities/question-template.entity").QuestionTemplateEntity>;
    get(dto: {
        id: number;
    }): Promise<import("../entities/question-template.entity").QuestionTemplateEntity>;
    getAllByUserId(dto: {
        userId: number;
    }): Promise<import("../entities/question-template.entity").QuestionTemplateEntity[]>;
    edit(dto: EditDto): Promise<{
        title: string;
        body: string;
        hashTags: import("../entities/hash-tag.entity").HashTagEntity[];
        id: number;
        createdAt: Date;
        updatedAt: Date;
        creator: import("../entities/user.entity").UserEntity;
    } & import("../entities/question-template.entity").QuestionTemplateEntity>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
