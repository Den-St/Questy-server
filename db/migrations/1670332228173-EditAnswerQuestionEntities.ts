import { MigrationInterface, QueryRunner } from "typeorm";

export class EditAnswerQuestionEntities1670332228173 implements MigrationInterface {
    name = 'EditAnswerQuestionEntities1670332228173'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "answer_entity" ADD "questionId" integer`);
        await queryRunner.query(`ALTER TABLE "answer_entity" ADD CONSTRAINT "FK_46f9a8790125a0d72234dda1614" FOREIGN KEY ("questionId") REFERENCES "question_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "answer_entity" DROP CONSTRAINT "FK_46f9a8790125a0d72234dda1614"`);
        await queryRunner.query(`ALTER TABLE "answer_entity" DROP COLUMN "questionId"`);
    }

}
