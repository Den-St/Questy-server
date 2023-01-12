"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditUserAnswersQuestionsEntities1673427053656 = void 0;
class EditUserAnswersQuestionsEntities1673427053656 {
    constructor() {
        this.name = 'EditUserAnswersQuestionsEntities1673427053656';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "answer_entity_subscribers_who_seen_user_entity" ("answerEntityId" integer NOT NULL, "userEntityId" integer NOT NULL, CONSTRAINT "PK_9384ddf7cc99127fc3c1966d140" PRIMARY KEY ("answerEntityId", "userEntityId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_f92ab031f2a5fe383277394721" ON "answer_entity_subscribers_who_seen_user_entity" ("answerEntityId") `);
        await queryRunner.query(`CREATE INDEX "IDX_769758fbf074f90a0cd472c354" ON "answer_entity_subscribers_who_seen_user_entity" ("userEntityId") `);
        await queryRunner.query(`CREATE TABLE "user_entity_subscribed_questions_question_entity" ("userEntityId" integer NOT NULL, "questionEntityId" integer NOT NULL, CONSTRAINT "PK_fdbd1d297fbbed067df9ba5cf7e" PRIMARY KEY ("userEntityId", "questionEntityId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_d612784c0af1cf39ee8ca1c21e" ON "user_entity_subscribed_questions_question_entity" ("userEntityId") `);
        await queryRunner.query(`CREATE INDEX "IDX_6e970899dcddb1f6363ba06ee6" ON "user_entity_subscribed_questions_question_entity" ("questionEntityId") `);
        await queryRunner.query(`ALTER TABLE "answer_entity_subscribers_who_seen_user_entity" ADD CONSTRAINT "FK_f92ab031f2a5fe3832773947212" FOREIGN KEY ("answerEntityId") REFERENCES "answer_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "answer_entity_subscribers_who_seen_user_entity" ADD CONSTRAINT "FK_769758fbf074f90a0cd472c3542" FOREIGN KEY ("userEntityId") REFERENCES "user_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_entity_subscribed_questions_question_entity" ADD CONSTRAINT "FK_d612784c0af1cf39ee8ca1c21e6" FOREIGN KEY ("userEntityId") REFERENCES "user_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_entity_subscribed_questions_question_entity" ADD CONSTRAINT "FK_6e970899dcddb1f6363ba06ee69" FOREIGN KEY ("questionEntityId") REFERENCES "question_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_entity_subscribed_questions_question_entity" DROP CONSTRAINT "FK_6e970899dcddb1f6363ba06ee69"`);
        await queryRunner.query(`ALTER TABLE "user_entity_subscribed_questions_question_entity" DROP CONSTRAINT "FK_d612784c0af1cf39ee8ca1c21e6"`);
        await queryRunner.query(`ALTER TABLE "answer_entity_subscribers_who_seen_user_entity" DROP CONSTRAINT "FK_769758fbf074f90a0cd472c3542"`);
        await queryRunner.query(`ALTER TABLE "answer_entity_subscribers_who_seen_user_entity" DROP CONSTRAINT "FK_f92ab031f2a5fe3832773947212"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6e970899dcddb1f6363ba06ee6"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d612784c0af1cf39ee8ca1c21e"`);
        await queryRunner.query(`DROP TABLE "user_entity_subscribed_questions_question_entity"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_769758fbf074f90a0cd472c354"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f92ab031f2a5fe383277394721"`);
        await queryRunner.query(`DROP TABLE "answer_entity_subscribers_who_seen_user_entity"`);
    }
}
exports.EditUserAnswersQuestionsEntities1673427053656 = EditUserAnswersQuestionsEntities1673427053656;
//# sourceMappingURL=1673427053656-EditUserAnswersQuestionsEntities.js.map