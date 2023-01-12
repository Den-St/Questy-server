"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionTemplatesModule = void 0;
const question_templates_controller_1 = require("./question-templates.controller");
const hash_tags_module_1 = require("../hash-tags/hash-tags.module");
const users_module_1 = require("../users/users.module");
const question_template_entity_1 = require("./../entities/question-template.entity");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const question_templates_service_1 = require("./question-templates.service");
let QuestionTemplatesModule = class QuestionTemplatesModule {
};
QuestionTemplatesModule = __decorate([
    (0, common_1.Module)({
        providers: [question_templates_service_1.QuestionTemplatesService],
        exports: [question_templates_service_1.QuestionTemplatesService],
        imports: [typeorm_1.TypeOrmModule.forFeature([question_template_entity_1.QuestionTemplateEntity]), users_module_1.UsersModule, hash_tags_module_1.HashTagsModule],
        controllers: [question_templates_controller_1.QuestionTemplatesController]
    })
], QuestionTemplatesModule);
exports.QuestionTemplatesModule = QuestionTemplatesModule;
//# sourceMappingURL=question-templates.module.js.map