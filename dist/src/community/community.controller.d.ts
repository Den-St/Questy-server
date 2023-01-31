import { JoinCommunityDto } from './dto/joinCommunity.dto';
import { CommunityService } from './community.service';
import { CreateCommunityDto } from './dto/createCommunity.dto';
import { GetWithFiltersDto } from './dto/getWithFilters.dto';
export declare class CommunityController {
    private readonly communityService;
    constructor(communityService: CommunityService);
    create(dto: CreateCommunityDto): Promise<import("../entities/community.entity").CommunityEntity>;
    getWithFilters(dto: GetWithFiltersDto): Promise<{
        communities: import("../entities/community.entity").CommunityEntity[];
        total: number;
    }>;
    get(id: number): Promise<import("../entities/community.entity").CommunityEntity>;
    getUsers(id: number): Promise<import("../entities/community.entity").CommunityEntity>;
    getMessages(id: number): Promise<import("../entities/community.entity").CommunityEntity>;
    join(dto: JoinCommunityDto): Promise<{
        members: import("../entities/user.entity").UserEntity[];
        membersNumber: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        creator: import("../entities/user.entity").UserEntity;
        hashTags: import("../entities/hash-tag.entity").HashTagEntity[];
        name: string;
    } & import("../entities/community.entity").CommunityEntity>;
    left(dto: JoinCommunityDto): Promise<{
        members: import("../entities/user.entity").UserEntity[];
        membersNumber: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        creator: import("../entities/user.entity").UserEntity;
        hashTags: import("../entities/hash-tag.entity").HashTagEntity[];
        name: string;
    } & import("../entities/community.entity").CommunityEntity>;
    delete(dto: {
        communityId: number;
    }): Promise<import("typeorm").DeleteResult>;
}
