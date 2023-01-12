"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditUserEntity1670446611821 = void 0;
class EditUserEntity1670446611821 {
    constructor() {
        this.name = 'EditUserEntity1670446611821';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_entity" ADD "numberOfAnswers" integer DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "user_entity" ADD "numberOfQuestions" integer DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "user_entity" ADD "rating" integer DEFAULT '0'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_entity" DROP COLUMN "rating"`);
        await queryRunner.query(`ALTER TABLE "user_entity" DROP COLUMN "numberOfQuestions"`);
        await queryRunner.query(`ALTER TABLE "user_entity" DROP COLUMN "numberOfAnswers"`);
    }
}
exports.EditUserEntity1670446611821 = EditUserEntity1670446611821;
//# sourceMappingURL=1670446611821-EditUserEntity.js.map