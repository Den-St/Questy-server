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
exports.UsersController = void 0;
const paginatedMembers_dto_1 = require("./../community/dto/paginatedMembers.dto");
const set_detailed_info_dto_1 = require("./dto/set-detailed-info.dto");
const create_dto_1 = require("./dto/create.dto");
const users_service_1 = require("./users.service");
const common_1 = require("@nestjs/common");
const GetPaginated_dto_1 = require("./dto/GetPaginated.dto");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async create(dto) {
        return await this.usersService.create(dto);
    }
    async setDetailedInfo(dto) {
        return await this.usersService.setDetailedInfo(dto);
    }
    async getAllPaginate(dto) {
        return await this.usersService.getAllPaginate(dto);
    }
    async getById(id) {
        return await this.usersService.getById(id);
    }
    async edit(dto) {
        return await this.usersService.edit(dto);
    }
    async softDelete(id) {
        return await this.usersService.softDelete(id);
    }
    async getNotSeenAnswers(id) {
        return await this.usersService.getNotSeenAnswers(id);
    }
    async getCorrectAnswers(id) {
        return await this.usersService.getCorrectAnswers(id);
    }
    async getFavoriteHashTags(id) {
        return await this.usersService.getFavoriteHashTags(id);
    }
    async removeFavoriteHashTag(dto) {
        return await this.usersService.removeFavoriteHashTag(dto);
    }
    async addToFavoriteHashTag(dto) {
        return await this.usersService.addToFavoriteHashTag(dto);
    }
    async getMembers(dto) {
        return await this.usersService.getMembers(dto);
    }
};
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)('setDetailedInfo'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [set_detailed_info_dto_1.SetUserDetailedInfoDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "setDetailedInfo", null);
__decorate([
    (0, common_1.Get)('getAllPaginated/:page/:pageSize/:fieldName/:orderValue/:search?'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [GetPaginated_dto_1.GetPaginatedDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getAllPaginate", null);
__decorate([
    (0, common_1.Get)('getById/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getById", null);
__decorate([
    (0, common_1.Patch)('edit'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [set_detailed_info_dto_1.SetUserDetailedInfoDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "edit", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "softDelete", null);
__decorate([
    (0, common_1.Get)('getNotSeenAnswers/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getNotSeenAnswers", null);
__decorate([
    (0, common_1.Get)('getCorrectAnswers/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getCorrectAnswers", null);
__decorate([
    (0, common_1.Get)('getFavoriteHashTags/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getFavoriteHashTags", null);
__decorate([
    (0, common_1.Post)('removeFavoriteHashTag'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "removeFavoriteHashTag", null);
__decorate([
    (0, common_1.Post)('addToFavoriteHashTag'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "addToFavoriteHashTag", null);
__decorate([
    (0, common_1.Get)('getMembers/:page/:pageSize/:communityId'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [paginatedMembers_dto_1.PaginatedMembersDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getMembers", null);
UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map