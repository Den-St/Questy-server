import { MigrationInterface, QueryRunner } from "typeorm";

export class EditAnswerEntity1670449494769 implements MigrationInterface {
    name = 'EditAnswerEntity1670449494769'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "answer_entity" ADD "rating" integer NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "answer_entity" DROP COLUMN "rating"`);
    }

}
