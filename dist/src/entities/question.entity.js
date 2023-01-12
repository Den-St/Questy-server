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
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionEntity = void 0;
const answer_entity_1 = require("./answer.entity");
const user_entity_1 = require("./user.entity");
const hash_tag_entity_1 = require("./hash-tag.entity");
const typeorm_1 = require("typeorm");
let QuestionEntity = class QuestionEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], QuestionEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], QuestionEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], QuestionEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], QuestionEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], QuestionEntity.prototype, "body", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => hash_tag_entity_1.HashTagEntity),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], QuestionEntity.prototype, "hashTags", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, user => user.questions),
    __metadata("design:type", user_entity_1.UserEntity)
], QuestionEntity.prototype, "creator", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => answer_entity_1.AnswerEntity, answer => answer.question),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], QuestionEntity.prototype, "answers", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], QuestionEntity.prototype, "rating", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], QuestionEntity.prototype, "haveCorrectAnswer", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], QuestionEntity.prototype, "answersNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], QuestionEntity.prototype, "views", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => user_entity_1.UserEntity, user => user.ratedUpQuestions),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], QuestionEntity.prototype, "ratedUpUsers", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => user_entity_1.UserEntity, user => user.ratedDownQuestions),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], QuestionEntity.prototype, "ratedDownUsers", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => user_entity_1.UserEntity, user => user.viewedQuestions),
    __metadata("design:type", Array)
], QuestionEntity.prototype, "viewers", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => user_entity_1.UserEntity, user => user.subscribedQuestions),
    __metadata("design:type", Array)
], QuestionEntity.prototype, "subscribers", void 0);
QuestionEntity = __decorate([
    (0, typeorm_1.Entity)()
], QuestionEntity);
exports.QuestionEntity = QuestionEntity;
//# sourceMappingURL=question.entity.js.map