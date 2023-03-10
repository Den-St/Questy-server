"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunityModule = void 0;
const users_module_1 = require("../users/users.module");
const community_entity_1 = require("./../entities/community.entity");
const community_controller_1 = require("./community.controller");
const common_1 = require("@nestjs/common");
const community_service_1 = require("./community.service");
const typeorm_1 = require("@nestjs/typeorm");
const hash_tags_module_1 = require("../hash-tags/hash-tags.module");
let CommunityModule = class CommunityModule {
};
CommunityModule = __decorate([
    (0, common_1.Module)({
        providers: [community_service_1.CommunityService],
        imports: [users_module_1.UsersModule,
            typeorm_1.TypeOrmModule.forFeature([community_entity_1.CommunityEntity]),
            hash_tags_module_1.HashTagsModule],
        exports: [community_service_1.CommunityService],
        controllers: [community_controller_1.CommunityController],
    })
], CommunityModule);
exports.CommunityModule = CommunityModule;
//# sourceMappingURL=community.module.js.map