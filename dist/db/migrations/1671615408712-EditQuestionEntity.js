"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditQuestionEntity1671615408712 = void 0;
class EditQuestionEntity1671615408712 {
    constructor() {
        this.name = 'EditQuestionEntity1671615408712';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "question_entity" ADD "answersNumber" integer NOT NULL DEFAULT '0'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "question_entity" DROP COLUMN "answersNumber"`);
    }
}
exports.EditQuestionEntity1671615408712 = EditQuestionEntity1671615408712;
//# sourceMappingURL=1671615408712-EditQuestionEntity.js.map