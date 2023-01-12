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
exports.HashTagsController = void 0;
const create_dto_1 = require("./dto/create.dto");
const common_1 = require("@nestjs/common");
const getByUserIdPaginated_dto_1 = require("../answers/dto/getByUserIdPaginated.dto");
const GetPaginated_dto_1 = require("../users/dto/GetPaginated.dto");
const getPaginatedQuestions_dto_1 = require("./dto/getPaginatedQuestions.dto");
const search_by_name_dto_1 = require("./dto/search-by-name.dto");
const hash_tags_service_1 = require("./hash-tags.service");
let HashTagsController = class HashTagsController {
    constructor(hashTagsService) {
        this.hashTagsService = hashTagsService;
    }
    async create(dto) {
        return await this.hashTagsService.create(dto);
    }
    async searchByHame(dto) {
        return await this.hashTagsService.searchByName(dto.name);
    }
    async getCreatedHashTagsPaginated(dto) {
        return await this.hashTagsService.getCreatedHashTagsPaginated(dto);
    }
    async getPaginated(dto) {
        return await this.hashTagsService.getPaginated(dto);
    }
    async getPaginatedQuestions(dto) {
        return await this.hashTagsService.getPaginatedQuestions(dto);
    }
};
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dto_1.CreateHashTagDto]),
    __metadata("design:returntype", Promise)
], HashTagsController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('/searchByName'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_by_name_dto_1.SearchHashTagsByName]),
    __metadata("design:returntype", Promise)
], HashTagsController.prototype, "searchByHame", null);
__decorate([
    (0, common_1.Post)('/getCreatedHashTagsPaginated'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [getByUserIdPaginated_dto_1.GetByUserIdPaginatedDto]),
    __metadata("design:returntype", Promise)
], HashTagsController.prototype, "getCreatedHashTagsPaginated", null);
__decorate([
    (0, common_1.Post)("/getPaginated"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [GetPaginated_dto_1.GetPaginatedDto]),
    __metadata("design:returntype", Promise)
], HashTagsController.prototype, "getPaginated", null);
__decorate([
    (0, common_1.Post)('/getPaginatedQuestions'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [getPaginatedQuestions_dto_1.GetPaginatedQuestions]),
    __metadata("design:returntype", Promise)
], HashTagsController.prototype, "getPaginatedQuestions", null);
HashTagsController = __decorate([
    (0, common_1.Controller)('hash-tags'),
    __metadata("design:paramtypes", [hash_tags_service_1.HashTagsService])
], HashTagsController);
exports.HashTagsController = HashTagsController;
//# sourceMappingURL=hash-tags.controller.js.map