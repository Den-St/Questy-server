import { MigrationInterface, QueryRunner } from "typeorm";

export class EditQuestionsEntity1671710172570 implements MigrationInterface {
    name = 'EditQuestionsEntity1671710172570'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "question_entity" ADD "views" integer NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "question_entity" DROP COLUMN "views"`);
    }

}
