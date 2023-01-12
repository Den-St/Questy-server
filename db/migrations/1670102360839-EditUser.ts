import { MigrationInterface, QueryRunner } from "typeorm";

export class EditUser1670102360839 implements MigrationInterface {
    name = 'EditUser1670102360839'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_entity" ADD "name" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_entity" DROP COLUMN "name"`);
    }

}
