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
exports.QuestionTemplateEntity = void 0;
const typeorm_1 = require("typeorm");
const hash_tag_entity_1 = require("./hash-tag.entity");
const user_entity_1 = require("./user.entity");
let QuestionTemplateEntity = class QuestionTemplateEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], QuestionTemplateEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], QuestionTemplateEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], QuestionTemplateEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], QuestionTemplateEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], QuestionTemplateEntity.prototype, "body", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => hash_tag_entity_1.HashTagEntity),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], QuestionTemplateEntity.prototype, "hashTags", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, user => user.questionTemplates),
    __metadata("design:type", user_entity_1.UserEntity)
], QuestionTemplateEntity.prototype, "creator", void 0);
QuestionTemplateEntity = __decorate([
    (0, typeorm_1.Entity)()
], QuestionTemplateEntity);
exports.QuestionTemplateEntity = QuestionTemplateEntity;
//# sourceMappingURL=question-template.entity.js.map