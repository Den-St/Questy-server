import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatedCommunityEntity1675089402094 implements MigrationInterface {
    name = 'CreatedCommunityEntity1675089402094'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "community_entity" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_43aeaac25b2d2ccce251c9ae54b" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "community_entity"`);
    }

}
