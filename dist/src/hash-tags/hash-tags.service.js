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
exports.HashTagsService = void 0;
const users_service_1 = require("../users/users.service");
const hash_tag_entity_1 = require("../entities/hash-tag.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let HashTagsService = class HashTagsService {
    constructor(hashtagRepository, userService) {
        this.hashtagRepository = hashtagRepository;
        this.userService = userService;
    }
    async getById(id) {
        return await this.hashtagRepository.findOne({ where: { id } });
    }
    async save(dto) {
        return await this.hashtagRepository.save(Object.assign({}, dto));
    }
    async create(dto) {
        const creator = await this.userService.getByIdWithCreatedHashTags(dto.creatorId);
        const newTag = this.hashtagRepository.create({ name: dto.name, description: dto.description, creator });
        await this.userService.save(Object.assign(Object.assign({}, creator), { createdHashTags: [...creator.createdHashTags, newTag] }));
        return await this.hashtagRepository.save(newTag);
    }
    async getByName(name) {
        const hashTag = await this.hashtagRepository.findOne({ where: { name } });
        return hashTag;
    }
    async getByNameWithInUsed(name) {
        const hashTag = await this.hashtagRepository.findOne({ where: { name }, relations: ['usedBy'] });
        console.log('f', hashTag);
        return hashTag;
    }
    async upPopularity(id) {
        const hashTag = await this.hashtagRepository.findOne({ where: { id } });
        return await this.hashtagRepository.save(Object.assign(Object.assign({}, hashTag), { followersNumber: hashTag.followersNumber + 1 }));
    }
    async searchByName(name) {
        if (!name)
            return [];
        const hashTags = await this.hashtagRepository.find({
            where: { name: (0, typeorm_2.Like)(`%${name}%`) },
            take: 5,
            order: { followersNumber: "ASC" }
        });
        return hashTags;
    }
    async getByNameAndIncreaseQuestionNumber(name) {
        let hashTag = await this.hashtagRepository.findOne({ where: { name } });
        hashTag = await this.hashtagRepository.save(Object.assign(Object.assign({}, hashTag), { questionsNumber: hashTag.questionsNumber + 1 }));
        return hashTag;
    }
    async getCreatedHashTagsPaginated(dto) {
        var _a;
        const skip = ((dto.page || 1) - 1) * (dto.pageSize || 10);
        const take = (dto.pageSize || 10);
        const [hashTags, total] = await this.hashtagRepository
            .findAndCount({
            where: { 'creator': { 'id': dto.userId } },
            relations: ['creator'],
            skip,
            take,
            order: { [((_a = dto === null || dto === void 0 ? void 0 : dto.orderRule) === null || _a === void 0 ? void 0 : _a.fieldName) || 'createdAt']: dto.orderRule.orderValue || 'DESC' }
        });
        return {
            hashTags,
            total
        };
    }
    async getPaginated(dto) {
        var _a, _b;
        const skip = ((dto.page || 1) - 1) * (dto.pageSize || 10);
        const take = (dto.pageSize || 10);
        const [hashTags, total] = await this.hashtagRepository
            .findAndCount({
            take, skip,
            order: { [((_a = dto === null || dto === void 0 ? void 0 : dto.orderRule) === null || _a === void 0 ? void 0 : _a.fieldName) || 'questionsNumber']: (((_b = dto === null || dto === void 0 ? void 0 : dto.orderRule) === null || _b === void 0 ? void 0 : _b.orderValue) || 'ASC') },
            where: { name: (0, typeorm_2.Like)(`%${dto.search || ""}%`) }
        });
        return {
            hashTags,
            total
        };
    }
    async getPaginatedQuestions(dto) {
        const skip = ((dto.page || 1) - 1) * (dto.pageSize || 10);
        const take = (dto.pageSize || 10);
    }
};
HashTagsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(hash_tag_entity_1.HashTagEntity)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => users_service_1.UsersService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UsersService])
], HashTagsService);
exports.HashTagsService = HashTagsService;
//# sourceMappingURL=hash-tags.service.js.map