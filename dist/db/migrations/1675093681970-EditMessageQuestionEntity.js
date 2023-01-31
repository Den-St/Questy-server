"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditMessageQuestionEntity1675093681970 = void 0;
class EditMessageQuestionEntity1675093681970 {
    constructor() {
        this.name = 'EditMessageQuestionEntity1675093681970';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "message_entity" ADD "text" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "message_entity" ADD "responseId" integer`);
        await queryRunner.query(`ALTER TABLE "message_entity" ADD "responseText" character varying`);
        await queryRunner.query(`ALTER TABLE "message_entity" ADD "pinnedQuestionId" integer`);
        await queryRunner.query(`ALTER TABLE "message_entity" ADD CONSTRAINT "FK_beb831dda3c5bbd4f12ec164d20" FOREIGN KEY ("pinnedQuestionId") REFERENCES "question_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "message_entity" DROP CONSTRAINT "FK_beb831dda3c5bbd4f12ec164d20"`);
        await queryRunner.query(`ALTER TABLE "message_entity" DROP COLUMN "pinnedQuestionId"`);
        await queryRunner.query(`ALTER TABLE "message_entity" DROP COLUMN "responseText"`);
        await queryRunner.query(`ALTER TABLE "message_entity" DROP COLUMN "responseId"`);
        await queryRunner.query(`ALTER TABLE "message_entity" DROP COLUMN "text"`);
    }
}
exports.EditMessageQuestionEntity1675093681970 = EditMessageQuestionEntity1675093681970;
//# sourceMappingURL=1675093681970-EditMessageQuestionEntity.js.map