import { MigrationInterface, QueryRunner } from "typeorm";

export class EditQuestionEntity1671613598189 implements MigrationInterface {
    name = 'EditQuestionEntity1671613598189'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "question_entity" ADD "haveCorrectAnswer" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "question_entity" DROP COLUMN "haveCorrectAnswer"`);
    }

}
