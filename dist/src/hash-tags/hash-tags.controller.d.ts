import { CreateHashTagDto } from './dto/create.dto';
import { GetByUserIdPaginatedDto } from 'src/answers/dto/getByUserIdPaginated.dto';
import { GetPaginatedDto } from 'src/users/dto/GetPaginated.dto';
import { SearchHashTagsByName } from './dto/search-by-name.dto';
import { HashTagsService } from './hash-tags.service';
export declare class HashTagsController {
    private readonly hashTagsService;
    constructor(hashTagsService: HashTagsService);
    create(dto: CreateHashTagDto): Promise<import("../entities/hash-tag.entity").HashTagEntity>;
    searchByHame(dto: SearchHashTagsByName): Promise<import("../entities/hash-tag.entity").HashTagEntity[]>;
    getCreatedHashTagsPaginated(dto: GetByUserIdPaginatedDto): Promise<{
        hashTags: import("../entities/hash-tag.entity").HashTagEntity[];
        total: number;
    }>;
    getPaginated(dto: GetPaginatedDto): Promise<{
        hashTags: import("../entities/hash-tag.entity").HashTagEntity[];
        total: number;
    }>;
}
