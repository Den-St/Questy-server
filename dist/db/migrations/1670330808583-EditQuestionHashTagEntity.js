"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditQuestionHashTagEntity1670330808583 = void 0;
class EditQuestionHashTagEntity1670330808583 {
    constructor() {
        this.name = 'EditQuestionHashTagEntity1670330808583';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "hash_tag_entity_questions_question_entity" ("hashTagEntityId" integer NOT NULL, "questionEntityId" integer NOT NULL, CONSTRAINT "PK_d909e88ae3262fb628ea8dd6937" PRIMARY KEY ("hashTagEntityId", "questionEntityId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_b50d7c985e87460cb50ea0db13" ON "hash_tag_entity_questions_question_entity" ("hashTagEntityId") `);
        await queryRunner.query(`CREATE INDEX "IDX_c68185d08e50f76f79257967b5" ON "hash_tag_entity_questions_question_entity" ("questionEntityId") `);
        await queryRunner.query(`ALTER TABLE "hash_tag_entity_questions_question_entity" ADD CONSTRAINT "FK_b50d7c985e87460cb50ea0db13d" FOREIGN KEY ("hashTagEntityId") REFERENCES "hash_tag_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "hash_tag_entity_questions_question_entity" ADD CONSTRAINT "FK_c68185d08e50f76f79257967b50" FOREIGN KEY ("questionEntityId") REFERENCES "question_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "hash_tag_entity_questions_question_entity" DROP CONSTRAINT "FK_c68185d08e50f76f79257967b50"`);
        await queryRunner.query(`ALTER TABLE "hash_tag_entity_questions_question_entity" DROP CONSTRAINT "FK_b50d7c985e87460cb50ea0db13d"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c68185d08e50f76f79257967b5"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_b50d7c985e87460cb50ea0db13"`);
        await queryRunner.query(`DROP TABLE "hash_tag_entity_questions_question_entity"`);
    }
}
exports.EditQuestionHashTagEntity1670330808583 = EditQuestionHashTagEntity1670330808583;
//# sourceMappingURL=1670330808583-EditQuestionHashTagEntity.js.map