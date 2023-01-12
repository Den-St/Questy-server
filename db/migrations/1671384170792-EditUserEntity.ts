import { MigrationInterface, QueryRunner } from "typeorm";

export class EditUserEntity1671384170792 implements MigrationInterface {
    name = 'EditUserEntity1671384170792'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_entity" ADD "occasion" character varying DEFAULT 'not set yet'`);
        await queryRunner.query(`ALTER TABLE "user_entity" ADD "birthdate" character varying DEFAULT 'not set yet'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_entity" DROP COLUMN "birthdate"`);
        await queryRunner.query(`ALTER TABLE "user_entity" DROP COLUMN "occasion"`);
    }

}
