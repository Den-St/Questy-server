import { MigrationInterface, QueryRunner } from "typeorm";

export class EditQuestionEntity1671615408712 implements MigrationInterface {
    name = 'EditQuestionEntity1671615408712'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "question_entity" ADD "answersNumber" integer NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "question_entity" DROP COLUMN "answersNumber"`);
    }

}
