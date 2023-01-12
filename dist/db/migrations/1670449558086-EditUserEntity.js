"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditUserEntity1670449558086 = void 0;
class EditUserEntity1670449558086 {
    constructor() {
        this.name = 'EditUserEntity1670449558086';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "question_entity" ADD "rating" integer NOT NULL DEFAULT '0'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "question_entity" DROP COLUMN "rating"`);
    }
}
exports.EditUserEntity1670449558086 = EditUserEntity1670449558086;
//# sourceMappingURL=1670449558086-EditUserEntity.js.map