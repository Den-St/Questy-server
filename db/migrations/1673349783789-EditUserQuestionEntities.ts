import { MigrationInterface, QueryRunner } from "typeorm";

export class EditUserQuestionEntities1673349783789 implements MigrationInterface {
    name = 'EditUserQuestionEntities1673349783789'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_entity_viewed_questions_question_entity" ("userEntityId" integer NOT NULL, "questionEntityId" integer NOT NULL, CONSTRAINT "PK_963092fd43105358e5acc7b027a" PRIMARY KEY ("userEntityId", "questionEntityId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_bf70dd8706fe33d8324b1d5346" ON "user_entity_viewed_questions_question_entity" ("userEntityId") `);
        await queryRunner.query(`CREATE INDEX "IDX_409f9047e6c3a6acd0576bacb2" ON "user_entity_viewed_questions_question_entity" ("questionEntityId") `);
        await queryRunner.query(`ALTER TABLE "user_entity_viewed_questions_question_entity" ADD CONSTRAINT "FK_bf70dd8706fe33d8324b1d5346d" FOREIGN KEY ("userEntityId") REFERENCES "user_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_entity_viewed_questions_question_entity" ADD CONSTRAINT "FK_409f9047e6c3a6acd0576bacb2e" FOREIGN KEY ("questionEntityId") REFERENCES "question_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_entity_viewed_questions_question_entity" DROP CONSTRAINT "FK_409f9047e6c3a6acd0576bacb2e"`);
        await queryRunner.query(`ALTER TABLE "user_entity_viewed_questions_question_entity" DROP CONSTRAINT "FK_bf70dd8706fe33d8324b1d5346d"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_409f9047e6c3a6acd0576bacb2"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_bf70dd8706fe33d8324b1d5346"`);
        await queryRunner.query(`DROP TABLE "user_entity_viewed_questions_question_entity"`);
    }

}
