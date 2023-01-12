"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashTagsModule = void 0;
const users_module_1 = require("../users/users.module");
const hash_tags_service_1 = require("./hash-tags.service");
const hash_tag_entity_1 = require("../entities/hash-tag.entity");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const hash_tags_controller_1 = require("./hash-tags.controller");
let HashTagsModule = class HashTagsModule {
};
HashTagsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([hash_tag_entity_1.HashTagEntity]), (0, common_1.forwardRef)(() => users_module_1.UsersModule)],
        controllers: [hash_tags_controller_1.HashTagsController],
        providers: [hash_tags_service_1.HashTagsService],
        exports: [hash_tags_service_1.HashTagsService]
    })
], HashTagsModule);
exports.HashTagsModule = HashTagsModule;
//# sourceMappingURL=hash-tags.module.js.map