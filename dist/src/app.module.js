"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const auth_module_1 = require("./auth/auth.module");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const data_source_1 = require("../db/data-source");
const users_module_1 = require("./users/users.module");
const roles_module_1 = require("./roles/roles.module");
const hash_tags_module_1 = require("./hash-tags/hash-tags.module");
const answers_module_1 = require("./answers/answers.module");
const avatars_module_1 = require("./avatars/avatars.module");
const questions_module_1 = require("./questions/questions.module");
const question_templates_controller_1 = require("./question-templates/question-templates.controller");
const question_templates_module_1 = require("./question-templates/question-templates.module");
const community_controller_1 = require("./community/community.controller");
const community_module_1 = require("./community/community.module");
const message_service_1 = require("./message/message.service");
const message_controller_1 = require("./message/message.controller");
const message_module_1 = require("./message/message.module");
const path = require("path");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true, envFilePath: '../.env' }),
            typeorm_1.TypeOrmModule.forRoot(data_source_1.dataSourceOptions),
            users_module_1.UsersModule,
            roles_module_1.RolesModule,
            hash_tags_module_1.HashTagsModule,
            questions_module_1.QuestionsModule,
            answers_module_1.AnswersModule,
            auth_module_1.AuthModule,
            avatars_module_1.AvatarsModule,
            question_templates_module_1.QuestionTemplatesModule,
            community_module_1.CommunityModule,
            message_module_1.MessageModule,
        ],
        controllers: [question_templates_controller_1.QuestionTemplatesController, community_controller_1.CommunityController, message_controller_1.MessageController],
        providers: [message_service_1.MessageService],
    })
], AppModule);
exports.AppModule = AppModule;
console.log(path.resolve('uploads/profileimages'));
//# sourceMappingURL=app.module.js.map