import { MigrationInterface, QueryRunner } from "typeorm";

export class EditUserHashTagEntities1671624915892 implements MigrationInterface {
    name = 'EditUserHashTagEntities1671624915892'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "hash_tag_entity" DROP CONSTRAINT "FK_d0a36c264e9c38b9c05af440a83"`);
        await queryRunner.query(`CREATE TABLE "user_entity_hash_tags_in_use_hash_tag_entity" ("userEntityId" integer NOT NULL, "hashTagEntityId" integer NOT NULL, CONSTRAINT "PK_c0f41d6ebda4b6928a5de174eae" PRIMARY KEY ("userEntityId", "hashTagEntityId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_a3640f5d97de5690c8494b2738" ON "user_entity_hash_tags_in_use_hash_tag_entity" ("userEntityId") `);
        await queryRunner.query(`CREATE INDEX "IDX_b2be222c2715238ae330d5baaf" ON "user_entity_hash_tags_in_use_hash_tag_entity" ("hashTagEntityId") `);
        await queryRunner.query(`ALTER TABLE "hash_tag_entity" DROP COLUMN "usedById"`);
        await queryRunner.query(`ALTER TABLE "user_entity_hash_tags_in_use_hash_tag_entity" ADD CONSTRAINT "FK_a3640f5d97de5690c8494b2738b" FOREIGN KEY ("userEntityId") REFERENCES "user_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_entity_hash_tags_in_use_hash_tag_entity" ADD CONSTRAINT "FK_b2be222c2715238ae330d5baaf1" FOREIGN KEY ("hashTagEntityId") REFERENCES "hash_tag_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_entity_hash_tags_in_use_hash_tag_entity" DROP CONSTRAINT "FK_b2be222c2715238ae330d5baaf1"`);
        await queryRunner.query(`ALTER TABLE "user_entity_hash_tags_in_use_hash_tag_entity" DROP CONSTRAINT "FK_a3640f5d97de5690c8494b2738b"`);
        await queryRunner.query(`ALTER TABLE "hash_tag_entity" ADD "usedById" integer`);
        await queryRunner.query(`DROP INDEX "public"."IDX_b2be222c2715238ae330d5baaf"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a3640f5d97de5690c8494b2738"`);
        await queryRunner.query(`DROP TABLE "user_entity_hash_tags_in_use_hash_tag_entity"`);
        await queryRunner.query(`ALTER TABLE "hash_tag_entity" ADD CONSTRAINT "FK_d0a36c264e9c38b9c05af440a83" FOREIGN KEY ("usedById") REFERENCES "user_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
