import { MigrationInterface, QueryRunner } from "typeorm";

export class EditCommunityEntity1675100144768 implements MigrationInterface {
    name = 'EditCommunityEntity1675100144768'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "community_entity" ADD "name" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "community_entity" DROP COLUMN "name"`);
    }

}
