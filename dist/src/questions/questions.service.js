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
exports.QuestionsService = void 0;
const hash_tags_service_1 = require("./../hash-tags/hash-tags.service");
const users_service_1 = require("../users/users.service");
const question_entity_1 = require("../entities/question.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let QuestionsService = class QuestionsService {
    constructor(questionsRepository, usersService, hashTagsService) {
        this.questionsRepository = questionsRepository;
        this.usersService = usersService;
        this.hashTagsService = hashTagsService;
    }
    async getByIdWithAnswers(id) {
        const question = await this.questionsRepository.findOne({ where: { id }, relations: ['answers'] });
        return question;
    }
    async getByIdWithAnswersAndSubscribers(id) {
        return await this.questionsRepository.findOne({ where: { id }, relations: ['subscribers', 'answers'] });
    }
    async addAnswer(id, answer) {
        const question = await this.questionsRepository.findOne({ where: { id }, relations: ['answers'] });
        return await this.questionsRepository.save(Object.assign(Object.assign({}, question), { answers: [...question.answers, answer], answersNumber: question.answersNumber + 1 }));
    }
    async getByUserId(id) {
        const questions = await this.questionsRepository.find({ where: { 'creator': { 'id': id } } });
        return questions;
    }
    async create(dto) {
        var _a;
        const hashTags = [];
        for (let i = 0; i < ((_a = dto === null || dto === void 0 ? void 0 : dto.hashTags) === null || _a === void 0 ? void 0 : _a.length); i++) {
            const hashTag = await this.hashTagsService.getByNameAndIncreaseQuestionNumber(dto.hashTags[i]);
            hashTags.push(hashTag);
        }
        const newCreator = await this.usersService.upQuestionNumber(dto.creatorId);
        const newQuestion = this.questionsRepository.create({ creator: newCreator, title: dto.title, body: dto.body, hashTags: [...hashTags] });
        return await this.questionsRepository.save(Object.assign({}, newQuestion));
    }
    async getByUserIdPaginated(dto) {
        var _a;
        const skip = ((dto.page || 1) - 1) * (dto.pageSize || 10);
        const take = (dto.pageSize || 10);
        const [questions, total] = await this.questionsRepository
            .findAndCount({
            where: { 'creator': { 'id': dto.userId } },
            take, skip, relations: ['hashTags'],
            order: { [((_a = dto === null || dto === void 0 ? void 0 : dto.orderRule) === null || _a === void 0 ? void 0 : _a.fieldName) || 'createdAt']: dto.orderRule.orderValue || 'DESC' }
        });
        return {
            questions,
            total
        };
    }
    async getPaginatedQuestions(dto) {
        var _a, _b;
        const skip = ((dto.page || 1) - 1) * (dto.pageSize || 10);
        const take = (dto.pageSize || 10);
        const hashTags = (_a = dto === null || dto === void 0 ? void 0 : dto.hashTags) === null || _a === void 0 ? void 0 : _a.split(";").filter(hashTag => hashTag.length);
        const [questions, total] = await this.questionsRepository
            .findAndCount({
            where: { hashTags: ((hashTags === null || hashTags === void 0 ? void 0 : hashTags.length) ? { name: (0, typeorm_2.In)(hashTags) } : null), title: (0, typeorm_2.Like)(`%${dto.search || ''}%`), haveCorrectAnswer: (dto.onlyAnswered === false ? null : true) },
            skip,
            take,
            order: { [((_b = dto === null || dto === void 0 ? void 0 : dto.orderRule) === null || _b === void 0 ? void 0 : _b.fieldName) || 'createdAt']: dto.orderRule.orderValue || 'DESC' },
            relations: ['hashTags']
        });
        return {
            questions,
            total
        };
    }
    async get(id) {
        const question = await this.questionsRepository.findOne({ where: { id }, relations: ['ratedUpUsers', 'ratedDownUsers', 'subscribers'] });
        console.log('q', question);
        return question;
    }
    async getWithSubscribers(id) {
        return await this.questionsRepository.findOne({ where: { id }, relations: ['subscribers'] });
    }
    async rateUp(dto) {
        const user = await this.usersService.getByIdWithRatedUpQuestions(dto.userId);
        const question = await this.questionsRepository.findOne({ where: { id: dto.questionId }, relations: ['ratedUpUsers'] });
        const newUser = await this.usersService.save(Object.assign(Object.assign({}, user), { ratedUpQuestions: [...user.ratedUpQuestions, question] }));
        return await this.questionsRepository.save(Object.assign(Object.assign({}, question), { rating: question.rating + 1, ratedUpUsers: [...question.ratedUpUsers, newUser] }));
    }
    async rateDown(dto) {
        const user = await this.usersService.getByIdWithRatedDownQuestions(dto.userId);
        const question = await this.questionsRepository.findOne({ where: { id: dto.questionId }, relations: ['ratedDownUsers'] });
        const newUser = await this.usersService.save(Object.assign(Object.assign({}, user), { ratedDownQuestions: [...user.ratedDownQuestions, question] }));
        return await this.questionsRepository.save(Object.assign(Object.assign({}, question), { rating: question.rating - 1, ratedDownUsers: [...question.ratedDownUsers, newUser] }));
    }
    async cancelRating(dto) {
        const user = await this.usersService.getByIdWithRatedUpDownQuestions(dto.userId);
        const question = await this.questionsRepository.findOne({ where: { id: dto.questionId }, relations: ['ratedUpUsers', 'ratedDownUsers'] });
        await this.usersService.save(Object.assign(Object.assign({}, user), { ratedDownQuestions: [...user.ratedDownQuestions.filter(ratedDownQuestion => ratedDownQuestion.id !== question.id)], ratedUpQuestions: [...user.ratedUpQuestions.filter(ratedUpQuestion => ratedUpQuestion.id !== question.id)] }));
        if (!!question.ratedUpUsers.filter(ratedUpUser => ratedUpUser.id === user.id).length) {
            console.log('bv');
            return await this.questionsRepository.save(Object.assign(Object.assign({}, question), { rating: question.rating - 1, ratedUpUsers: [...question.ratedUpUsers.filter(ratedUpUser => ratedUpUser.id !== user.id)] }));
        }
        if (!!question.ratedDownUsers.filter(ratedUpUser => ratedUpUser.id === user.id).length) {
            console.log('bv');
            return await this.questionsRepository.save(Object.assign(Object.assign({}, question), { rating: question.rating + 1, ratedDownUsers: [...question.ratedDownUsers.filter(ratedDownUser => ratedDownUser.id !== user.id)] }));
        }
        console.log('bv');
    }
    async view(dto) {
        const question = await this.questionsRepository.findOne({ where: { id: dto.questionId }, relations: ['viewers'] });
        const user = await this.usersService.getWithViewedQuestions(dto.userId);
        if (question.viewers.some(viewer => viewer.id === user.id))
            return;
        await this.usersService.save(Object.assign(Object.assign({}, user), { viewedQuestions: [...user.viewedQuestions, question] }));
        return await this.questionsRepository.save(Object.assign(Object.assign({}, question), { viewers: [...question.viewers, user], views: question.views + 1 }));
    }
    async save(question) {
        return await this.questionsRepository.save(question);
    }
    async subscribe(dto) {
        const user = await this.usersService.getWithSubscribedQuestions(dto.userId);
        const question = await this.questionsRepository.findOne({ where: { id: dto.questionId }, relations: ['subscribers'] });
        const newUser = await this.usersService.save(Object.assign(Object.assign({}, user), { subscribedQuestions: [...user.subscribedQuestions, question] }));
        return await this.questionsRepository.save(Object.assign(Object.assign({}, question), { subscribers: [...question.subscribers, newUser] }));
    }
    async unsubscribe(dto) {
        const user = await this.usersService.getWithSubscribedQuestions(dto.userId);
        return await this.usersService.save(Object.assign(Object.assign({}, user), { subscribedQuestions: [...user.subscribedQuestions.filter(question => question.id !== dto.questionId)] }));
    }
    async seeAnswers(dto) {
        const user = await this.usersService.getNotSeenAnswers(dto.userId);
        return await this.usersService.save(Object.assign(Object.assign({}, user), { notSeenAnswers: [...user.notSeenAnswers.filter(answer => answer.question.id !== dto.questionId)] }));
    }
};
QuestionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(question_entity_1.QuestionEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UsersService,
        hash_tags_service_1.HashTagsService])
], QuestionsService);
exports.QuestionsService = QuestionsService;
//# sourceMappingURL=questions.service.js.map