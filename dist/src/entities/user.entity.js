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
exports.UserEntity = void 0;
const avatar_entity_1 = require("./avatar.entity");
const hash_tag_entity_1 = require("./hash-tag.entity");
const answer_entity_1 = require("./answer.entity");
const question_entity_1 = require("./question.entity");
const role_entity_1 = require("./role.entity");
const typeorm_1 = require("typeorm");
const question_template_entity_1 = require("./question-template.entity");
let UserEntity = class UserEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], UserEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], UserEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'not set yet' }),
    __metadata("design:type", String)
], UserEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'not set yet' }),
    __metadata("design:type", String)
], UserEntity.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => hash_tag_entity_1.HashTagEntity, { nullable: true }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], UserEntity.prototype, "favoriteHashTags", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'not set yet' }),
    __metadata("design:type", String)
], UserEntity.prototype, "occasion", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'not set yet' }),
    __metadata("design:type", String)
], UserEntity.prototype, "birthdate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserEntity.prototype, "passwordHash", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => role_entity_1.RoleEntity),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], UserEntity.prototype, "roles", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => question_entity_1.QuestionEntity, question => question.creator),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], UserEntity.prototype, "questions", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => answer_entity_1.AnswerEntity, answer => answer.creator),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], UserEntity.prototype, "answers", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], UserEntity.prototype, "numberOfAnswers", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], UserEntity.prototype, "numberOfQuestions", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], UserEntity.prototype, "rating", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'not set yet' }),
    __metadata("design:type", String)
], UserEntity.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => avatar_entity_1.AvatarEntity, image => image.user),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", avatar_entity_1.AvatarEntity)
], UserEntity.prototype, "avatar", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false, nullable: true }),
    __metadata("design:type", Boolean)
], UserEntity.prototype, "isDeleted", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "about", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => hash_tag_entity_1.HashTagEntity, hashtag => hashtag.creator),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], UserEntity.prototype, "createdHashTags", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => question_template_entity_1.QuestionTemplateEntity, questionTemplate => questionTemplate.creator),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], UserEntity.prototype, "questionTemplates", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => question_entity_1.QuestionEntity, question => question.ratedUpUsers),
    __metadata("design:type", Array)
], UserEntity.prototype, "ratedUpQuestions", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => question_entity_1.QuestionEntity, question => question.ratedDownUsers),
    __metadata("design:type", Array)
], UserEntity.prototype, "ratedDownQuestions", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => question_entity_1.QuestionEntity, question => question.viewers),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], UserEntity.prototype, "viewedQuestions", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => answer_entity_1.AnswerEntity, answer => answer.ratedUpUsers),
    __metadata("design:type", Array)
], UserEntity.prototype, "ratedUpAnswers", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => answer_entity_1.AnswerEntity, answer => answer.ratedDownUsers),
    __metadata("design:type", Array)
], UserEntity.prototype, "ratedDownAnswers", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => question_entity_1.QuestionEntity, question => question.subscribers),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], UserEntity.prototype, "subscribedQuestions", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => answer_entity_1.AnswerEntity, answer => answer.subscribersWhoHaveNotSeen),
    __metadata("design:type", Array)
], UserEntity.prototype, "notSeenAnswers", void 0);
UserEntity = __decorate([
    (0, typeorm_1.Entity)()
], UserEntity);
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map