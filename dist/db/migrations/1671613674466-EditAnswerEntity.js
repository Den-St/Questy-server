"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditAnswerEntity1671613674466 = void 0;
class EditAnswerEntity1671613674466 {
    constructor() {
        this.name = 'EditAnswerEntity1671613674466';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "answer_entity" ADD "correct" boolean NOT NULL DEFAULT false`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "answer_entity" DROP COLUMN "correct"`);
    }
}
exports.EditAnswerEntity1671613674466 = EditAnswerEntity1671613674466;
//# sourceMappingURL=1671613674466-EditAnswerEntity.js.map