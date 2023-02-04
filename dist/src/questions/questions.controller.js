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
exports.QuestionsController = void 0;
const see_answers_dto_1 = require("./dto/see-answers.dto");
const view_dto_1 = require("./dto/view.dto");
const questions_service_1 = require("./questions.service");
const common_1 = require("@nestjs/common");
const create_dto_1 = require("./dto/create.dto");
const getByUserIdPaginated_dto_1 = require("../answers/dto/getByUserIdPaginated.dto");
const getPaginatedQuestions_dto_1 = require("../hash-tags/dto/getPaginatedQuestions.dto");
const rateUp_dto_1 = require("./dto/rateUp.dto");
const subscribe_dto_1 = require("./dto/subscribe.dto");
let QuestionsController = class QuestionsController {
    constructor(questionService) {
        this.questionService = questionService;
    }
    async getByUserId(dto) {
        return await this.questionService.getByUserId(dto.id);
    }
    async create(dto) {
        return await this.questionService.create(dto);
    }
    async getByUserIdPaginated(dto) {
        return await this.questionService.getByUserIdPaginated(dto);
    }
    async getPaginatedQuestions(dto) {
        return await this.questionService.getPaginatedQuestions(dto);
    }
    async get(dto) {
        return await this.questionService.get(dto.id);
    }
    async rateUp(dto) {
        return await this.questionService.rateUp(dto);
    }
    async rateDown(dto) {
        return await this.questionService.rateDown(dto);
    }
    async cancelRating(dto) {
        return await this.questionService.cancelRating(dto);
    }
    async view(dto) {
        return await this.questionService.view(dto);
    }
    async subscribe(dto) {
        return await this.questionService.subscribe(dto);
    }
    async unsubscribe(dto) {
        return await this.questionService.unsubscribe(dto);
    }
    async seeAnswers(dto) {
        return await this.questionService.seeAnswers(dto);
    }
    async globalSearch(dto) {
        return await this.questionService.globalSearch(dto.name);
    }
};
__decorate([
    (0, common_1.Get)("getByUserId"),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QuestionsController.prototype, "getByUserId", null);
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dto_1.CreateQuestionDto]),
    __metadata("design:returntype", Promise)
], QuestionsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('getByUserIdPaginated'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [getByUserIdPaginated_dto_1.GetByUserIdPaginatedDto]),
    __metadata("design:returntype", Promise)
], QuestionsController.prototype, "getByUserIdPaginated", null);
__decorate([
    (0, common_1.Get)('getPaginatedQuestions'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [getPaginatedQuestions_dto_1.GetPaginatedQuestions]),
    __metadata("design:returntype", Promise)
], QuestionsController.prototype, "getPaginatedQuestions", null);
__decorate([
    (0, common_1.Get)("get"),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QuestionsController.prototype, "get", null);
__decorate([
    (0, common_1.Post)('rateUp'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [rateUp_dto_1.RateQuestionDto]),
    __metadata("design:returntype", Promise)
], QuestionsController.prototype, "rateUp", null);
__decorate([
    (0, common_1.Post)('rateDown'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [rateUp_dto_1.RateQuestionDto]),
    __metadata("design:returntype", Promise)
], QuestionsController.prototype, "rateDown", null);
__decorate([
    (0, common_1.Post)('cancelRating'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [rateUp_dto_1.RateQuestionDto]),
    __metadata("design:returntype", Promise)
], QuestionsController.prototype, "cancelRating", null);
__decorate([
    (0, common_1.Post)('view'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [view_dto_1.ViewDto]),
    __metadata("design:returntype", Promise)
], QuestionsController.prototype, "view", null);
__decorate([
    (0, common_1.Post)('subscribe'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [subscribe_dto_1.SubscribeDto]),
    __metadata("design:returntype", Promise)
], QuestionsController.prototype, "subscribe", null);
__decorate([
    (0, common_1.Post)('unsubscribe'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [subscribe_dto_1.SubscribeDto]),
    __metadata("design:returntype", Promise)
], QuestionsController.prototype, "unsubscribe", null);
__decorate([
    (0, common_1.Post)('seeAnswers'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [see_answers_dto_1.SeeAnswersDto]),
    __metadata("design:returntype", Promise)
], QuestionsController.prototype, "seeAnswers", null);
__decorate([
    (0, common_1.Get)('globalSearch'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QuestionsController.prototype, "globalSearch", null);
QuestionsController = __decorate([
    (0, common_1.Controller)('questions'),
    __metadata("design:paramtypes", [questions_service_1.QuestionsService])
], QuestionsController);
exports.QuestionsController = QuestionsController;
//# sourceMappingURL=questions.controller.js.map