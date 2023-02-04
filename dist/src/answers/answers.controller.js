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
exports.AnswersController = void 0;
const create_dto_1 = require("./dto/create.dto");
const answers_service_1 = require("./answers.service");
const common_1 = require("@nestjs/common");
const getByUserIdPaginated_dto_1 = require("./dto/getByUserIdPaginated.dto");
const rate_answer_dto_1 = require("./dto/rate-answer.dto");
let AnswersController = class AnswersController {
    constructor(answersService) {
        this.answersService = answersService;
    }
    async create(dto) {
        return await this.answersService.create(dto);
    }
    async getByUserId(dto) {
        return await this.answersService.getByUserId(dto.id);
    }
    async getByUserIdPaginated(dto) {
        return await this.answersService.getByUserIdPaginated(dto);
    }
    async getByQuestionId(dto) {
        return await this.answersService.getByQuestionId(dto.id);
    }
    async rateUp(dto) {
        return await this.answersService.rateUp(dto);
    }
    async rateDown(dto) {
        return await this.answersService.rateDown(dto);
    }
    async cancelRating(dto) {
        return await this.answersService.cancelRating(dto);
    }
    async correct(dto) {
        return await this.answersService.correct(dto.answerId);
    }
};
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dto_1.CreateAnswerDto]),
    __metadata("design:returntype", Promise)
], AnswersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('getByUserId'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AnswersController.prototype, "getByUserId", null);
__decorate([
    (0, common_1.Get)('getByUserIdPaginated'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [getByUserIdPaginated_dto_1.GetByUserIdPaginatedDto]),
    __metadata("design:returntype", Promise)
], AnswersController.prototype, "getByUserIdPaginated", null);
__decorate([
    (0, common_1.Get)('getByQuestionId'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AnswersController.prototype, "getByQuestionId", null);
__decorate([
    (0, common_1.Post)('rateUp'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [rate_answer_dto_1.RateAnswerDto]),
    __metadata("design:returntype", Promise)
], AnswersController.prototype, "rateUp", null);
__decorate([
    (0, common_1.Post)('rateDown'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [rate_answer_dto_1.RateAnswerDto]),
    __metadata("design:returntype", Promise)
], AnswersController.prototype, "rateDown", null);
__decorate([
    (0, common_1.Post)('cancelRating'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [rate_answer_dto_1.RateAnswerDto]),
    __metadata("design:returntype", Promise)
], AnswersController.prototype, "cancelRating", null);
__decorate([
    (0, common_1.Post)('correct'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AnswersController.prototype, "correct", null);
AnswersController = __decorate([
    (0, common_1.Controller)('answers'),
    __metadata("design:paramtypes", [answers_service_1.AnswersService])
], AnswersController);
exports.AnswersController = AnswersController;
//# sourceMappingURL=answers.controller.js.map