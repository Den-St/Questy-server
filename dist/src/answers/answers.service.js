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
exports.AnswersService = void 0;
const questions_service_1 = require("../questions/questions.service");
const answer_entity_1 = require("../entities/answer.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const users_service_1 = require("../users/users.service");
let AnswersService = class AnswersService {
    constructor(answersRepository, questionsService, usersService) {
        this.answersRepository = answersRepository;
        this.questionsService = questionsService;
        this.usersService = usersService;
    }
    async create(dto) {
        const creator = await this.usersService.getById(dto.creatorId);
        const question = await this.questionsService.getByIdWithAnswersAndSubscribers(dto.questionId);
        const newAnswer = this.answersRepository.create({ creator, question, text: dto.text, subscribersWhoHaveNotSeen: question.subscribers });
        const newCreator = await this.usersService.addAnswer({ id: dto.creatorId, answer: newAnswer });
        const newQuestion = await this.questionsService.addAnswer(question.id, newAnswer);
        return await this.answersRepository.save(Object.assign(Object.assign({}, newAnswer), { creator: newCreator, question: newQuestion }));
    }
    async getByUserId(id) {
        const answers = await this.answersRepository.find({ where: { 'creator': { 'id': id } } });
        return answers;
    }
    async getByUserIdPaginated(dto) {
        const skip = ((+dto.page || 1) - 1) * (+dto.pageSize || 10);
        const take = (+dto.pageSize || 10);
        const [answers, total] = await this.answersRepository
            .findAndCount({
            where: { 'creator': { 'id': dto.userId } },
            take, skip, relations: ['question', 'question.hashTags'],
            order: { [(dto === null || dto === void 0 ? void 0 : dto.fieldName) || 'createdAt']: (dto === null || dto === void 0 ? void 0 : dto.orderValue) || 'DESC' }
        });
        return {
            total,
            answers
        };
    }
    async getByQuestionId(id) {
        const answers = await this.answersRepository.find({
            where: { 'question': { id } }, relations: ['creator', 'ratedUpUsers', 'ratedDownUsers', 'question', 'question.creator'],
            order: { 'rating': "DESC" }
        });
        return answers;
    }
    async rateUp(dto) {
        const user = await this.usersService.getByIdWithRatedUpAnswers(dto.userId);
        const answer = await this.answersRepository.findOne({ where: { id: dto.answerId }, relations: ['ratedUpUsers'] });
        const newUser = await this.usersService.save(Object.assign(Object.assign({}, user), { ratedUpAnswers: [...user.ratedUpAnswers, answer] }));
        return await this.answersRepository.save(Object.assign(Object.assign({}, answer), { rating: answer.rating + 1, ratedUpUsers: [...answer.ratedUpUsers, newUser] }));
    }
    async rateDown(dto) {
        const user = await this.usersService.getByIdWithRatedDownAnswers(dto.userId);
        const answer = await this.answersRepository.findOne({ where: { id: dto.answerId }, relations: ['ratedDownUsers'] });
        const newUser = await this.usersService.save(Object.assign(Object.assign({}, user), { ratedDownAnswers: [...user.ratedDownAnswers, answer] }));
        return await this.answersRepository.save(Object.assign(Object.assign({}, answer), { rating: answer.rating - 1, ratedDownUsers: [...answer.ratedDownUsers, newUser] }));
    }
    async cancelRating(dto) {
        const user = await this.usersService.getByIdWithRatedUpDownAnswers(dto.userId);
        const answer = await this.answersRepository.findOne({ where: { id: dto.answerId }, relations: ['ratedUpUsers', 'ratedDownUsers'] });
        await this.usersService.save(Object.assign(Object.assign({}, user), { ratedDownAnswers: [...user.ratedDownAnswers.filter(ratedDownAnswer => ratedDownAnswer.id !== answer.id)], ratedUpAnswers: [...user.ratedUpAnswers.filter(ratedUpAnswer => ratedUpAnswer.id !== answer.id)] }));
        if (!!answer.ratedUpUsers.filter(ratedUpUser => ratedUpUser.id === user.id).length) {
            return await this.answersRepository.save(Object.assign(Object.assign({}, answer), { rating: answer.rating - 1, ratedUpUsers: [...answer.ratedUpUsers.filter(ratedUpUser => ratedUpUser.id !== user.id)] }));
        }
        if (!!answer.ratedDownUsers.filter(ratedUpUser => ratedUpUser.id === user.id).length) {
            return await this.answersRepository.save(Object.assign(Object.assign({}, answer), { rating: answer.rating + 1, ratedDownUsers: [...answer.ratedDownUsers.filter(ratedDownUser => ratedDownUser.id !== user.id)] }));
        }
    }
    async correct(id) {
        const answer = await this.answersRepository.findOne({ where: { id }, relations: ['question', 'subscribers'] });
        const question = await this.questionsService.getWithSubscribers(answer.question.id);
        if (answer.correct)
            return;
        await this.questionsService.save(Object.assign(Object.assign({}, question), { haveCorrectAnswer: !question.haveCorrectAnswer }));
        return await this.answersRepository.save(Object.assign(Object.assign({}, answer), { correct: !answer.correct, subscribers: [...question.subscribers] }));
    }
};
AnswersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(answer_entity_1.AnswerEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        questions_service_1.QuestionsService,
        users_service_1.UsersService])
], AnswersService);
exports.AnswersService = AnswersService;
//# sourceMappingURL=answers.service.js.map