import { MigrationInterface, QueryRunner } from "typeorm";

export class EditUser1670940743615 implements MigrationInterface {
    name = 'EditUser1670940743615'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_entity" ADD "gender" character varying DEFAULT 'other'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_entity" DROP COLUMN "gender"`);
    }

}
