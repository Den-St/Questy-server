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
exports.HashTagEntity = void 0;
const community_entity_1 = require("./community.entity");
const user_entity_1 = require("./user.entity");
const question_entity_1 = require("./question.entity");
const typeorm_1 = require("typeorm");
const question_template_entity_1 = require("./question-template.entity");
let HashTagEntity = class HashTagEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], HashTagEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], HashTagEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], HashTagEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HashTagEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => user_entity_1.UserEntity),
    __metadata("design:type", Array)
], HashTagEntity.prototype, "followers", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], HashTagEntity.prototype, "followersNumber", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => question_entity_1.QuestionEntity, question => question.hashTags),
    __metadata("design:type", Array)
], HashTagEntity.prototype, "questions", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: 0 }),
    __metadata("design:type", Number)
], HashTagEntity.prototype, "questionsNumber", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, user => user.createdHashTags),
    __metadata("design:type", user_entity_1.UserEntity)
], HashTagEntity.prototype, "creator", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => question_template_entity_1.QuestionTemplateEntity, questionTemplate => questionTemplate.hashTags),
    __metadata("design:type", Array)
], HashTagEntity.prototype, "questionTemplates", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: '' }),
    __metadata("design:type", String)
], HashTagEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => community_entity_1.CommunityEntity, communities => communities.hashTags),
    __metadata("design:type", Array)
], HashTagEntity.prototype, "communities", void 0);
HashTagEntity = __decorate([
    (0, typeorm_1.Entity)()
], HashTagEntity);
exports.HashTagEntity = HashTagEntity;
//# sourceMappingURL=hash-tag.entity.js.map