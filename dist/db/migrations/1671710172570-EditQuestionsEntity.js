"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditQuestionsEntity1671710172570 = void 0;
class EditQuestionsEntity1671710172570 {
    constructor() {
        this.name = 'EditQuestionsEntity1671710172570';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "question_entity" ADD "views" integer NOT NULL DEFAULT '0'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "question_entity" DROP COLUMN "views"`);
    }
}
exports.EditQuestionsEntity1671710172570 = EditQuestionsEntity1671710172570;
//# sourceMappingURL=1671710172570-EditQuestionsEntity.js.map