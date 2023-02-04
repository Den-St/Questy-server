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
exports.QuestionTemplatesController = void 0;
const common_1 = require("@nestjs/common");
const createDto_1 = require("./dto/createDto");
const edit_dto_1 = require("./dto/edit.dto");
const question_templates_service_1 = require("./question-templates.service");
let QuestionTemplatesController = class QuestionTemplatesController {
    constructor(questionTemplatesService) {
        this.questionTemplatesService = questionTemplatesService;
    }
    async create(dto) {
        return await this.questionTemplatesService.create(dto);
    }
    async get(dto) {
        return await this.questionTemplatesService.get(dto.id);
    }
    async getAllByUserId(dto) {
        return await this.questionTemplatesService.getAllByUserId(dto.userId);
    }
    async edit(dto) {
        return await this.questionTemplatesService.edit(dto);
    }
    async delete(id) {
        return await this.questionTemplatesService.delete(id);
    }
};
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createDto_1.CreateDto]),
    __metadata("design:returntype", Promise)
], QuestionTemplatesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('get'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QuestionTemplatesController.prototype, "get", null);
__decorate([
    (0, common_1.Get)('getAllByUserId'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QuestionTemplatesController.prototype, "getAllByUserId", null);
__decorate([
    (0, common_1.Patch)('edit'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [edit_dto_1.EditDto]),
    __metadata("design:returntype", Promise)
], QuestionTemplatesController.prototype, "edit", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], QuestionTemplatesController.prototype, "delete", null);
QuestionTemplatesController = __decorate([
    (0, common_1.Controller)('question-templates'),
    __metadata("design:paramtypes", [question_templates_service_1.QuestionTemplatesService])
], QuestionTemplatesController);
exports.QuestionTemplatesController = QuestionTemplatesController;
//# sourceMappingURL=question-templates.controller.js.map