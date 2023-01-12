"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarsModule = void 0;
const avatar_entity_1 = require("../entities/avatar.entity");
const typeorm_1 = require("@nestjs/typeorm");
const avatars_controller_1 = require("./avatars.controller");
const common_1 = require("@nestjs/common");
const avatars_service_1 = require("./avatars.service");
const users_module_1 = require("../users/users.module");
const platform_express_1 = require("@nestjs/platform-express");
let AvatarsModule = class AvatarsModule {
};
AvatarsModule = __decorate([
    (0, common_1.Module)({
        providers: [avatars_service_1.AvatarsService],
        exports: [avatars_service_1.AvatarsService],
        controllers: [avatars_controller_1.AvatarsController],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([avatar_entity_1.AvatarEntity]),
            (0, common_1.forwardRef)(() => users_module_1.UsersModule),
            platform_express_1.MulterModule.registerAsync({
                useFactory: () => ({
                    dest: 'uploads/profileimages',
                }),
            })
        ]
    })
], AvatarsModule);
exports.AvatarsModule = AvatarsModule;
//# sourceMappingURL=avatars.module.js.map