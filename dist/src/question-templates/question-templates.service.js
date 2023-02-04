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
exports.QuestionTemplatesService = void 0;
const users_service_1 = require("../users/users.service");
const question_template_entity_1 = require("./../entities/question-template.entity");
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const hash_tags_service_1 = require("../hash-tags/hash-tags.service");
const compareArrays_1 = require("../helpers/compareArrays");
let QuestionTemplatesService = class QuestionTemplatesService {
    constructor(questionTemplatesRepository, usersService, hashTagsService) {
        this.questionTemplatesRepository = questionTemplatesRepository;
        this.usersService = usersService;
        this.hashTagsService = hashTagsService;
    }
    async create(dto) {
        const creator = await this.usersService.getById(dto.creatorId);
        const hashTags = [];
        for (let i = 0; i < dto.hashTags.length; i++) {
            const hashTag = await this.hashTagsService.getByName(dto.hashTags[i]);
            hashTags.push(hashTag);
        }
        return await this.questionTemplatesRepository.save({ creator, hashTags, body: dto.body, title: dto.title });
    }
    async get(id) {
        return await this.questionTemplatesRepository.findOne({ where: { id }, relations: ['hashTags'] });
    }
    async getAllByUserId(userId) {
        return await this.questionTemplatesRepository.find({ where: { 'creator': { id: userId } } });
    }
    async edit(dto) {
        var _a;
        const template = await this.questionTemplatesRepository.findOne({ where: { id: dto.templateId }, relations: ['hashTags'] });
        const hashTags = [];
        if (!(0, compareArrays_1.compareArrays)(dto.hashTags, template.hashTags.map(hashTag => hashTag.name))) {
            for (let i = 0; i < ((_a = dto.hashTags) === null || _a === void 0 ? void 0 : _a.length); i++) {
                let hashTag = await this.hashTagsService.getByName(dto.hashTags[i]);
                hashTags.push(hashTag);
            }
        }
        return await this.questionTemplatesRepository.save(Object.assign(Object.assign({}, template), { title: dto.title, body: dto.body, hashTags }));
    }
    async delete(id) {
        return await this.questionTemplatesRepository.delete({ id });
    }
};
QuestionTemplatesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(question_template_entity_1.QuestionTemplateEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        users_service_1.UsersService,
        hash_tags_service_1.HashTagsService])
], QuestionTemplatesService);
exports.QuestionTemplatesService = QuestionTemplatesService;
//# sourceMappingURL=question-templates.service.js.map