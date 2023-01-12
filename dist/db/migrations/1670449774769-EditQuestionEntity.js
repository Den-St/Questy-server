"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditQuestionEntity1670449774769 = void 0;
class EditQuestionEntity1670449774769 {
    constructor() {
        this.name = 'EditQuestionEntity1670449774769';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "question_entity" ALTER COLUMN "rating" DROP NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "question_entity" ALTER COLUMN "rating" SET NOT NULL`);
    }
}
exports.EditQuestionEntity1670449774769 = EditQuestionEntity1670449774769;
//# sourceMappingURL=1670449774769-EditQuestionEntity.js.map