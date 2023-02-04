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
exports.CommunityController = void 0;
const joinCommunity_dto_1 = require("./dto/joinCommunity.dto");
const community_service_1 = require("./community.service");
const common_1 = require("@nestjs/common");
const createCommunity_dto_1 = require("./dto/createCommunity.dto");
const getWithFilters_dto_1 = require("./dto/getWithFilters.dto");
const paginatedMembers_dto_1 = require("./dto/paginatedMembers.dto");
let CommunityController = class CommunityController {
    constructor(communityService) {
        this.communityService = communityService;
    }
    async create(dto) {
        return await this.communityService.create(dto);
    }
    async getPaginated(dto) {
        return await this.communityService.getPaginated(dto);
    }
    async get(dto) {
        return await this.communityService.get(dto.id);
    }
    async getMembers(dto) {
        return await this.communityService.getMembers(dto);
    }
    async getMessages(dto) {
        return await this.communityService.getMessages(dto.id);
    }
    async join(dto) {
        return await this.communityService.join(dto);
    }
    async leave(dto) {
        return await this.communityService.leave(dto);
    }
    async delete(dto) {
        return await this.communityService.delete(dto.communityId);
    }
};
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createCommunity_dto_1.CreateCommunityDto]),
    __metadata("design:returntype", Promise)
], CommunityController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('getPaginated'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [getWithFilters_dto_1.GetWithFiltersDto]),
    __metadata("design:returntype", Promise)
], CommunityController.prototype, "getPaginated", null);
__decorate([
    (0, common_1.Get)('get'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CommunityController.prototype, "get", null);
__decorate([
    (0, common_1.Get)('getMembers'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [paginatedMembers_dto_1.PaginatedMembersDto]),
    __metadata("design:returntype", Promise)
], CommunityController.prototype, "getMembers", null);
__decorate([
    (0, common_1.Get)('getMessages'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CommunityController.prototype, "getMessages", null);
__decorate([
    (0, common_1.Post)('join'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [joinCommunity_dto_1.JoinCommunityDto]),
    __metadata("design:returntype", Promise)
], CommunityController.prototype, "join", null);
__decorate([
    (0, common_1.Post)('leave'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [joinCommunity_dto_1.JoinCommunityDto]),
    __metadata("design:returntype", Promise)
], CommunityController.prototype, "leave", null);
__decorate([
    (0, common_1.Delete)('delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CommunityController.prototype, "delete", null);
CommunityController = __decorate([
    (0, common_1.Controller)('community'),
    __metadata("design:paramtypes", [community_service_1.CommunityService])
], CommunityController);
exports.CommunityController = CommunityController;
//# sourceMappingURL=community.controller.js.map