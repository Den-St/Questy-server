"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditAnswerEntity1670449494769 = void 0;
class EditAnswerEntity1670449494769 {
    constructor() {
        this.name = 'EditAnswerEntity1670449494769';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "answer_entity" ADD "rating" integer NOT NULL DEFAULT '0'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "answer_entity" DROP COLUMN "rating"`);
    }
}
exports.EditAnswerEntity1670449494769 = EditAnswerEntity1670449494769;
//# sourceMappingURL=1670449494769-EditAnswerEntity.js.map