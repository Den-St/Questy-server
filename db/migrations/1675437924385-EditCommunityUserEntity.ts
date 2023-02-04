import { MigrationInterface, QueryRunner } from "typeorm";

export class EditCommunityUserEntity1675437924385 implements MigrationInterface {
    name = 'EditCommunityUserEntity1675437924385'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_entity_communities_community_entity" ("userEntityId" integer NOT NULL, "communityEntityId" integer NOT NULL, CONSTRAINT "PK_5b9c333b217b1a5aa4453e01f8d" PRIMARY KEY ("userEntityId", "communityEntityId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_0385149928c34db29766ecd1c0" ON "user_entity_communities_community_entity" ("userEntityId") `);
        await queryRunner.query(`CREATE INDEX "IDX_7dc41e1aa6de75864e6cbbf0f8" ON "user_entity_communities_community_entity" ("communityEntityId") `);
        await queryRunner.query(`ALTER TABLE "user_entity_communities_community_entity" ADD CONSTRAINT "FK_0385149928c34db29766ecd1c08" FOREIGN KEY ("userEntityId") REFERENCES "user_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_entity_communities_community_entity" ADD CONSTRAINT "FK_7dc41e1aa6de75864e6cbbf0f89" FOREIGN KEY ("communityEntityId") REFERENCES "community_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_entity_communities_community_entity" DROP CONSTRAINT "FK_7dc41e1aa6de75864e6cbbf0f89"`);
        await queryRunner.query(`ALTER TABLE "user_entity_communities_community_entity" DROP CONSTRAINT "FK_0385149928c34db29766ecd1c08"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_7dc41e1aa6de75864e6cbbf0f8"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0385149928c34db29766ecd1c0"`);
        await queryRunner.query(`DROP TABLE "user_entity_communities_community_entity"`);
    }

}
