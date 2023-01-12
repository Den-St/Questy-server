import { MigrationInterface, QueryRunner } from "typeorm";

export class EditUserHashTag1670940887311 implements MigrationInterface {
    name = 'EditUserHashTag1670940887311'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_entity_favorite_hash_tags_hash_tag_entity" ("userEntityId" integer NOT NULL, "hashTagEntityId" integer NOT NULL, CONSTRAINT "PK_7799f3c242a43a554c434e30665" PRIMARY KEY ("userEntityId", "hashTagEntityId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_7d361b4df541814e5d0b21f2ce" ON "user_entity_favorite_hash_tags_hash_tag_entity" ("userEntityId") `);
        await queryRunner.query(`CREATE INDEX "IDX_86a5dc1b74392f13d01ec3632c" ON "user_entity_favorite_hash_tags_hash_tag_entity" ("hashTagEntityId") `);
        await queryRunner.query(`ALTER TABLE "user_entity_favorite_hash_tags_hash_tag_entity" ADD CONSTRAINT "FK_7d361b4df541814e5d0b21f2ce3" FOREIGN KEY ("userEntityId") REFERENCES "user_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_entity_favorite_hash_tags_hash_tag_entity" ADD CONSTRAINT "FK_86a5dc1b74392f13d01ec3632c8" FOREIGN KEY ("hashTagEntityId") REFERENCES "hash_tag_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_entity_favorite_hash_tags_hash_tag_entity" DROP CONSTRAINT "FK_86a5dc1b74392f13d01ec3632c8"`);
        await queryRunner.query(`ALTER TABLE "user_entity_favorite_hash_tags_hash_tag_entity" DROP CONSTRAINT "FK_7d361b4df541814e5d0b21f2ce3"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_86a5dc1b74392f13d01ec3632c"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_7d361b4df541814e5d0b21f2ce"`);
        await queryRunner.query(`DROP TABLE "user_entity_favorite_hash_tags_hash_tag_entity"`);
    }

}
