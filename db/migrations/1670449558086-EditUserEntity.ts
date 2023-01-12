import { MigrationInterface, QueryRunner } from "typeorm";

export class EditUserEntity1670449558086 implements MigrationInterface {
    name = 'EditUserEntity1670449558086'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "question_entity" ADD "rating" integer NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "question_entity" DROP COLUMN "rating"`);
    }

}
