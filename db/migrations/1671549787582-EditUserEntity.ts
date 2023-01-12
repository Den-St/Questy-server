import { MigrationInterface, QueryRunner } from "typeorm";

export class EditUserEntity1671549787582 implements MigrationInterface {
    name = 'EditUserEntity1671549787582'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_entity" ADD "about" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_entity" DROP COLUMN "about"`);
    }

}
