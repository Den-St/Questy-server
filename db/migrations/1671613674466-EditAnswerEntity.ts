import { MigrationInterface, QueryRunner } from "typeorm";

export class EditAnswerEntity1671613674466 implements MigrationInterface {
    name = 'EditAnswerEntity1671613674466'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "answer_entity" ADD "correct" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "answer_entity" DROP COLUMN "correct"`);
    }

}
