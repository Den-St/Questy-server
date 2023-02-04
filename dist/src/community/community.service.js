"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunityService = void 0;
const hash_tags_service_1 = require("../hash-tags/hash-tags.service");
const community_entity_1 = require("./../entities/community.entity");
const users_service_1 = require("../users/users.service");
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
let CommunityService = class CommunityService {
    constructor(communityRepository, userService, hashTagService) {
        this.communityRepository = communityRepository;
        this.userService = userService;
        this.hashTagService = hashTagService;
    }
    async create(dto) {
        const user = await this.userService.getWithCreatedCommunitiesAndCommunities(dto.creatorId);
        const hashTags = [];
        for (let i = 0; i < dto.hashTagIds.length; i++) {
            let hashTag = await this.hashTagService.getByIdWithCommunities(dto.hashTagIds[i]);
            hashTags.push(hashTag);
        }
        const community = await this.communityRepository.create({ creator: user, hashTags, members: [user], name: dto.name });
        return await this.communityRepository.save(community);
    }
    async get(id) {
        return await this.communityRepository.findOne({ where: { id }, relations: ['creator', 'creator.avatar'] });
    }
    async getMembers(dto) {
        const take = dto.pageSize || 4;
        const skip = ((dto.page || 1) - 1) * (dto.pageSize || 4);
        return await (await this.communityRepository.findOne({
            where: { id: dto.communityId }, relations: ['members']
        })).members;
    }
    async getMessages(id) {
        return await this.communityRepository.findOne({ where: { id }, relations: ['messages'] });
    }
    async getPaginated(dto) {
        var _a, _b;
        const skip = ((dto.page || 1) - 1) * (dto.pageSize || 10);
        const take = (dto.pageSize || 10);
        const hashTags = (_a = dto === null || dto === void 0 ? void 0 : dto.hashTags) === null || _a === void 0 ? void 0 : _a.split(";").filter(hashTag => hashTag.length);
        const [communities, total] = await this.communityRepository.findAndCount({
            where: { hashTags: ((hashTags === null || hashTags === void 0 ? void 0 : hashTags.length) ? { name: (0, typeorm_1.In)(hashTags) } : null), name: (0, typeorm_1.Like)(`%${(dto === null || dto === void 0 ? void 0 : dto.search) || ''}%`) },
            skip,
            take,
            order: { [((_b = dto === null || dto === void 0 ? void 0 : dto.orderRule) === null || _b === void 0 ? void 0 : _b.fieldName) || 'createdAt']: dto.orderRule.orderValue || 'DESC' },
            relations: ['hashTags']
        });
        return {
            communities,
            total
        };
    }
    async join(dto) {
        const community = await this.communityRepository.findOne({ where: { id: dto.communityId }, relations: ['members'] });
        const user = await this.userService.getById(dto.userId);
        return await this.communityRepository.save(Object.assign(Object.assign({}, community), { members: [...community.members, user], membersNumber: community.membersNumber + 1 }));
    }
    async leave(dto) {
        const community = await this.communityRepository.findOne({ where: { id: dto.communityId }, relations: ['members'] });
        const user = await this.userService.getById(dto.userId);
        return await this.communityRepository.save(Object.assign(Object.assign({}, community), { members: [...community.members.filter(member => member.id !== dto.userId)], membersNumber: community.membersNumber - 1 }));
    }
    async delete(communityId) {
        return await this.communityRepository.delete({ id: communityId });
    }
};
CommunityService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(community_entity_1.CommunityEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        users_service_1.UsersService,
        hash_tags_service_1.HashTagsService])
], CommunityService);
exports.CommunityService = CommunityService;
//# sourceMappingURL=community.service.js.map