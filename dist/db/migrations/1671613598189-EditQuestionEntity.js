"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditQuestionEntity1671613598189 = void 0;
class EditQuestionEntity1671613598189 {
    constructor() {
        this.name = 'EditQuestionEntity1671613598189';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "question_entity" ADD "haveCorrectAnswer" boolean NOT NULL DEFAULT false`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "question_entity" DROP COLUMN "haveCorrectAnswer"`);
    }
}
exports.EditQuestionEntity1671613598189 = EditQuestionEntity1671613598189;
//# sourceMappingURL=1671613598189-EditQuestionEntity.js.map