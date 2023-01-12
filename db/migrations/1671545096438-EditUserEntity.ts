import { MigrationInterface, QueryRunner } from "typeorm";

export class EditUserEntity1671545096438 implements MigrationInterface {
    name = 'EditUserEntity1671545096438'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_entity" ADD "isDeleted" boolean DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_entity" DROP COLUMN "isDeleted"`);
    }

}
