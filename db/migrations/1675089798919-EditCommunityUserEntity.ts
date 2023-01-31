import { MigrationInterface, QueryRunner } from "typeorm";

export class EditCommunityUserEntity1675089798919 implements MigrationInterface {
    name = 'EditCommunityUserEntity1675089798919'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "community_entity" ADD "creatorId" integer`);
        await queryRunner.query(`ALTER TABLE "community_entity" ADD CONSTRAINT "FK_5f92143f28c9392527add306d78" FOREIGN KEY ("creatorId") REFERENCES "user_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "community_entity" DROP CONSTRAINT "FK_5f92143f28c9392527add306d78"`);
        await queryRunner.query(`ALTER TABLE "community_entity" DROP COLUMN "creatorId"`);
    }

}
