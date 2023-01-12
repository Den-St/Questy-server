"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditQuestionEntity1670449793443 = void 0;
class EditQuestionEntity1670449793443 {
    constructor() {
        this.name = 'EditQuestionEntity1670449793443';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "question_entity" ALTER COLUMN "rating" SET NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "question_entity" ALTER COLUMN "rating" DROP NOT NULL`);
    }
}
exports.EditQuestionEntity1670449793443 = EditQuestionEntity1670449793443;
//# sourceMappingURL=1670449793443-EditQuestionEntity.js.map