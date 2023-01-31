import { GetWithFiltersDto } from './dto/getWithFilters.dto';
import { HashTagsService } from 'src/hash-tags/hash-tags.service';
import { HashTagEntity } from 'src/entities/hash-tag.entity';
import { CommunityEntity } from './../entities/community.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateCommunityDto } from './dto/createCommunity.dto';
import { JoinCommunityDto } from './dto/joinCommunity.dto';
export declare class CommunityService {
    private readonly communityRepository;
    private readonly userService;
    private readonly hashTagService;
    constructor(communityRepository: Repository<CommunityEntity>, userService: UsersService, hashTagService: HashTagsService);
    create(dto: CreateCommunityDto): Promise<CommunityEntity>;
    get(id: number): Promise<CommunityEntity>;
    getMembers(id: number): Promise<CommunityEntity>;
    getMessages(id: number): Promise<CommunityEntity>;
    getPaginated(dto: GetWithFiltersDto): Promise<{
        communities: CommunityEntity[];
        total: number;
    }>;
    join(dto: JoinCommunityDto): Promise<{
        members: import("../entities/user.entity").UserEntity[];
        membersNumber: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        creator: import("../entities/user.entity").UserEntity;
        hashTags: HashTagEntity[];
        name: string;
    } & CommunityEntity>;
    left(dto: JoinCommunityDto): Promise<{
        members: import("../entities/user.entity").UserEntity[];
        membersNumber: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        creator: import("../entities/user.entity").UserEntity;
        hashTags: HashTagEntity[];
        name: string;
    } & CommunityEntity>;
    delete(communityId: number): Promise<import("typeorm").DeleteResult>;
}
