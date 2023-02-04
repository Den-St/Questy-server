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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const users_service_1 = require("../users/users.service");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async validate(email, password) {
        const user = await this.userService.getByEmail(email);
        if (!user) {
            return null;
        }
        const passwordEquals = bcrypt.compare(user.passwordHash, password);
        return passwordEquals ? user : null;
    }
    async register(dto) {
        const candidate = await this.userService.getByEmail(dto.email);
        if (candidate)
            throw new common_1.HttpException("email already in use", common_1.HttpStatus.BAD_REQUEST);
        const hashPassword = await bcrypt.hash(dto.password, 10);
        const user = await this.userService.create({ email: dto.email, passwordHash: hashPassword });
        const { passwordHash } = user, userClientData = __rest(user, ["passwordHash"]);
        return Object.assign({ token: this.generateToken(user) }, userClientData);
    }
    async login(dto) {
        const user = await this.validate(dto.email, dto.password);
        if (user) {
            return Object.assign({ token: this.generateToken(user) }, user);
        }
        throw new common_1.HttpException("bad login data", common_1.HttpStatus.BAD_REQUEST);
    }
    getMe(token) {
        const user = this.jwtService.verify(token);
        const { passwordHash } = user, userClientData = __rest(user, ["passwordHash"]);
        return userClientData;
    }
    generateToken(userData) {
        const payload = Object.assign({}, userData);
        return this.jwtService.sign(payload);
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)((0, common_1.forwardRef)(() => users_service_1.UsersService))),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map