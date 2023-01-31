import { MigrationInterface, QueryRunner } from "typeorm";

export class EditCommunityEntity1675170501579 implements MigrationInterface {
    name = 'EditCommunityEntity1675170501579'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "community_entity" ADD "membersNumber" integer NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "community_entity" DROP COLUMN "membersNumber"`);
    }

}
