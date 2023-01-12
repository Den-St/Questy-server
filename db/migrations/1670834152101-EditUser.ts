import { MigrationInterface, QueryRunner } from "typeorm";

export class EditUser1670834152101 implements MigrationInterface {
    name = 'EditUser1670834152101'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_entity" ALTER COLUMN "name" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_entity" ALTER COLUMN "name" SET DEFAULT 'not given yet'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_entity" ALTER COLUMN "name" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "user_entity" ALTER COLUMN "name" SET NOT NULL`);
    }

}
