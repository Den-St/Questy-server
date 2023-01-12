import { MigrationInterface, QueryRunner } from "typeorm";

export class EditUserEntity1671455286685 implements MigrationInterface {
    name = 'EditUserEntity1671455286685'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_entity" ADD "location" character varying NOT NULL DEFAULT 'not set yet'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_entity" DROP COLUMN "location"`);
    }

}
