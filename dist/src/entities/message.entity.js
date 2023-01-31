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
exports.MessageEntity = void 0;
const question_entity_1 = require("./question.entity");
const user_entity_1 = require("./user.entity");
const typeorm_1 = require("typeorm");
let MessageEntity = class MessageEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], MessageEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], MessageEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], MessageEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, creator => creator),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", user_entity_1.UserEntity)
], MessageEntity.prototype, "creator", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MessageEntity.prototype, "text", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], MessageEntity.prototype, "responseId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], MessageEntity.prototype, "responseText", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => question_entity_1.QuestionEntity),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", question_entity_1.QuestionEntity)
], MessageEntity.prototype, "pinnedQuestion", void 0);
MessageEntity = __decorate([
    (0, typeorm_1.Entity)()
], MessageEntity);
exports.MessageEntity = MessageEntity;
//# sourceMappingURL=message.entity.js.map