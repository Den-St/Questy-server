"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const avatars_module_1 = require("../avatars/avatars.module");
const hash_tags_module_1 = require("../hash-tags/hash-tags.module");
const roles_module_1 = require("../roles/roles.module");
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const users_controller_1 = require("./users.controller");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../entities/user.entity");
const platform_express_1 = require("@nestjs/platform-express");
const jwt_1 = require("@nestjs/jwt");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.UserEntity]),
            roles_module_1.RolesModule, hash_tags_module_1.HashTagsModule,
            (0, common_1.forwardRef)(() => avatars_module_1.AvatarsModule),
            jwt_1.JwtModule.register({
                secret: "secretKey",
                signOptions: { expiresIn: '30d' },
            }),
            platform_express_1.MulterModule.registerAsync({
                useFactory: () => ({
                    dest: 'uploads/profileimages',
                }),
            })
        ],
        providers: [users_service_1.UsersService,],
        controllers: [users_controller_1.UsersController],
        exports: [users_service_1.UsersService]
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map