"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditAnswerQuestionEntities1670332228173 = void 0;
class EditAnswerQuestionEntities1670332228173 {
    constructor() {
        this.name = 'EditAnswerQuestionEntities1670332228173';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "answer_entity" ADD "questionId" integer`);
        await queryRunner.query(`ALTER TABLE "answer_entity" ADD CONSTRAINT "FK_46f9a8790125a0d72234dda1614" FOREIGN KEY ("questionId") REFERENCES "question_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "answer_entity" DROP CONSTRAINT "FK_46f9a8790125a0d72234dda1614"`);
        await queryRunner.query(`ALTER TABLE "answer_entity" DROP COLUMN "questionId"`);
    }
}
exports.EditAnswerQuestionEntities1670332228173 = EditAnswerQuestionEntities1670332228173;
//# sourceMappingURL=1670332228173-EditAnswerQuestionEntities.js.map