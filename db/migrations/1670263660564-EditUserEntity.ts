import { MigrationInterface, QueryRunner } from "typeorm";

export class EditUserEntity1670263660564 implements MigrationInterface {
    name = 'EditUserEntity1670263660564'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_entity" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_entity" ADD "passwordHash" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_entity" DROP COLUMN "passwordHash"`);
        await queryRunner.query(`ALTER TABLE "user_entity" DROP COLUMN "email"`);
    }

}
