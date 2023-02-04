import { MigrationInterface, QueryRunner } from "typeorm";

export class EditCommunityEntity1675250156453 implements MigrationInterface {
    name = 'EditCommunityEntity1675250156453'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "community_entity" ALTER COLUMN "membersNumber" SET DEFAULT '1'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "community_entity" ALTER COLUMN "membersNumber" SET DEFAULT '0'`);
    }

}
