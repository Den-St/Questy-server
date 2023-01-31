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
exports.CommunityEntity = void 0;
const hash_tag_entity_1 = require("./hash-tag.entity");
const user_entity_1 = require("./user.entity");
const typeorm_1 = require("typeorm");
let CommunityEntity = class CommunityEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CommunityEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CommunityEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CommunityEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, creator => creator.createdCommunities),
    __metadata("design:type", user_entity_1.UserEntity)
], CommunityEntity.prototype, "creator", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => user_entity_1.UserEntity, user => user),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], CommunityEntity.prototype, "members", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => hash_tag_entity_1.HashTagEntity),
    __metadata("design:type", Array)
], CommunityEntity.prototype, "hashTags", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CommunityEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], CommunityEntity.prototype, "membersNumber", void 0);
CommunityEntity = __decorate([
    (0, typeorm_1.Entity)()
], CommunityEntity);
exports.CommunityEntity = CommunityEntity;
//# sourceMappingURL=community.entity.js.map