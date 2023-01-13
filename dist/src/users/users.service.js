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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const jwt_1 = require("@nestjs/jwt");
const avatars_service_1 = require("../avatars/avatars.service");
const hash_tags_service_1 = require("../hash-tags/hash-tags.service");
const roles_service_1 = require("../roles/roles.service");
const user_entity_1 = require("../entities/user.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let UsersService = class UsersService {
    constructor(userRepository, rolesService, hashTagsService, imagesService, jwtService) {
        this.userRepository = userRepository;
        this.rolesService = rolesService;
        this.hashTagsService = hashTagsService;
        this.imagesService = imagesService;
        this.jwtService = jwtService;
    }
    async save(user) {
        return await this.userRepository.save(user);
    }
    async create(dto) {
        const role = await this.rolesService.get("USER");
        const newUser = this.userRepository.create(Object.assign(Object.assign({}, dto), { roles: [role] }));
        const userWithName = await this.userRepository.save(Object.assign({}, newUser));
        return await this.userRepository.save(Object.assign(Object.assign({}, userWithName), { name: `user${userWithName.id}` }));
    }
    async setDetailedInfo(dto) {
        var _a;
        const user = await this.userRepository.findOne({ where: { id: dto.userId }, relations: [] });
        const hashTags = [];
        for (let i = 0; i < ((_a = dto.favoriteHashTags) === null || _a === void 0 ? void 0 : _a.length); i++) {
            let hashTag = await this.hashTagsService.getByName(dto.favoriteHashTags[i]);
            await this.hashTagsService.upPopularity(hashTag.id);
            hashTags.push(hashTag);
        }
        const newAvatar = await this.imagesService.create(dto.avatarPath, user.id);
        const newUser = await this.userRepository.save(Object.assign(Object.assign({}, user), { name: dto.name, favoriteHashTags: hashTags, gender: dto.gender, avatar: newAvatar, occasion: dto.occasion, birthdate: dto.birthdate }));
        return {
            user: newUser,
            token: this.generateToken(newUser)
        };
    }
    async getById(id) {
        const user = await this.userRepository.findOne({ where: { id }, relations: ['avatar', 'favoriteHashTags'] });
        return user;
    }
    async getByIdWithRatedUpQuestions(id) {
        const user = await this.userRepository.findOne({ where: { id }, relations: ['ratedUpQuestions'] });
        return user;
    }
    async getByIdWithRatedDownQuestions(id) {
        const user = await this.userRepository.findOne({ where: { id }, relations: ['ratedDownQuestions'] });
        return user;
    }
    async getByIdWithRatedUpAnswers(id) {
        const user = await this.userRepository.findOne({ where: { id }, relations: ['ratedUpAnswers'] });
        return user;
    }
    async getByIdWithRatedDownAnswers(id) {
        const user = await this.userRepository.findOne({ where: { id }, relations: ['ratedDownAnswers'] });
        return user;
    }
    async getByIdWithRatedUpDownAnswers(id) {
        const user = await this.userRepository.findOne({ where: { id }, relations: ['ratedDownAnswers', 'ratedUpAnswers'] });
        return user;
    }
    async getByIdWithRatedUpDownQuestions(id) {
        const user = await this.userRepository.findOne({ where: { id }, relations: ['ratedDownQuestions', 'ratedUpQuestions'] });
        return user;
    }
    async getByIdWithCreatedHashTags(id) {
        const user = await this.userRepository.findOne({ where: { id }, relations: ['createdHashTags'] });
        const { passwordHash } = user, userClientData = __rest(user, ["passwordHash"]);
        return userClientData;
    }
    async getWithSubscribedQuestions(id) {
        return await this.userRepository.findOne({ where: { id }, relations: ['subscribedQuestions'] });
    }
    async addQuestion(dto) {
        const user = await this.userRepository.findOne({ where: { id: dto.id }, relations: ['questions'] });
        return await this.userRepository.save(Object.assign(Object.assign({}, user), { questions: [...user.questions, dto.question] }));
    }
    async addAnswer(dto) {
        const user = await this.userRepository.findOne({ where: { id: dto.id }, relations: ['answers', 'notSeenAnswers'] });
        return await this.userRepository.save(Object.assign(Object.assign({}, user), { answers: [...user.answers, dto.answer], numberOfAnswers: user.numberOfAnswers + 1, notSeenAnswers: [...user.notSeenAnswers, dto.answer] }));
    }
    async getByEmail(email) {
        const user = await this.userRepository.findOne({ where: { email } });
        return user;
    }
    generateToken(userData) {
        const payload = Object.assign({}, userData);
        return this.jwtService.sign(payload);
    }
    async getAllPaginate(dto) {
        var _a;
        const skip = ((dto.page || 1) - 1) * (dto.pageSize || 10);
        const take = (dto.pageSize || 10);
        console.log("bbf", dto.search);
        const [users, total] = await this.userRepository
            .findAndCount({
            take, skip,
            relations: ['createdHashTags'],
            where: { name: (0, typeorm_2.Like)(`%${dto.search || ""}%`) },
            order: { [((_a = dto === null || dto === void 0 ? void 0 : dto.orderRule) === null || _a === void 0 ? void 0 : _a.fieldName) || 'createdAt']: dto.orderRule.orderValue || 'DESC' }
        });
        return {
            users: users,
            total: total
        };
    }
    async edit(dto) {
        var _a;
        const user = await this.userRepository.findOne({ where: { id: dto.userId } });
        const hashTags = [];
        for (let i = 0; i < ((_a = dto.favoriteHashTags) === null || _a === void 0 ? void 0 : _a.length); i++) {
            let hashTag = await this.hashTagsService.getByName(dto.favoriteHashTags[i]);
            await this.hashTagsService.upPopularity(hashTag.id);
            hashTags.push(hashTag);
        }
        let newAvatar;
        if (dto.avatarPath) {
            newAvatar = await this.imagesService.create(dto.avatarPath, user.id);
        }
        const newUser = await this.userRepository.save(Object.assign(Object.assign({}, user), { name: dto.name, favoriteHashTags: hashTags, gender: dto.gender, avatar: newAvatar, occasion: dto.occasion, birthdate: dto.birthdate, location: dto.location, about: dto.about }));
        const { passwordHash } = newUser, clientUser = __rest(newUser, ["passwordHash"]);
        return {
            user: clientUser,
            token: this.generateToken(newUser)
        };
    }
    async softDelete(id) {
        const user = await this.userRepository.findOne({ where: { id } });
        return await this.userRepository.save(Object.assign(Object.assign({}, user), { isDeleted: true }));
    }
    async upQuestionNumber(id) {
        const user = await this.userRepository.findOne({ where: { id } });
        return await this.userRepository.save(Object.assign(Object.assign({}, user), { numberOfQuestions: user.numberOfQuestions + 1 }));
    }
    async addToCreatedHashTags(userId, hashTag) {
        const user = await this.userRepository.findOne({ where: { id: userId }, relations: ['createdHashTags'] });
        const newHashTag = await this.hashTagsService.save(Object.assign(Object.assign({}, hashTag), { creator: user }));
        return await this.userRepository.save(Object.assign(Object.assign({}, user), { createdHashTags: [...user.createdHashTags, newHashTag] }));
    }
    async getWithViewedQuestions(id) {
        return await this.userRepository.findOne({ where: { id }, relations: ['viewedQuestions'] });
    }
    async getNotSeenAnswers(id) {
        return await this.userRepository.findOne({ where: { id }, relations: ['notSeenAnswers', 'notSeenAnswers.question'] });
    }
    async getCorrectAnswers(id) {
        return await this.userRepository.findOne({ where: { id }, relations: ['correctAnswersOnSubscribedQuestions', 'correctAnswersOnSubscribedQuestions.question'] });
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __param(3, (0, common_1.Inject)((0, common_1.forwardRef)(() => avatars_service_1.AvatarsService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        roles_service_1.RolesService,
        hash_tags_service_1.HashTagsService,
        avatars_service_1.AvatarsService,
        jwt_1.JwtService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map