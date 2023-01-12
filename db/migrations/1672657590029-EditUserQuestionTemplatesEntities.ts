import { MigrationInterface, QueryRunner } from "typeorm";

export class EditUserQuestionTemplatesEntities1672657590029 implements MigrationInterface {
    name = 'EditUserQuestionTemplatesEntities1672657590029'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "question_template_entity" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying NOT NULL DEFAULT '', "body" character varying NOT NULL DEFAULT '', "creatorId" integer, CONSTRAINT "PK_72cdabfc4483c3fb3a5a25cc4d4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "question_template_entity_hash_tags_hash_tag_entity" ("questionTemplateEntityId" integer NOT NULL, "hashTagEntityId" integer NOT NULL, CONSTRAINT "PK_0acc83619399d243df2376b17e0" PRIMARY KEY ("questionTemplateEntityId", "hashTagEntityId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_dff0e4beea8a5e9fe7984d2877" ON "question_template_entity_hash_tags_hash_tag_entity" ("questionTemplateEntityId") `);
        await queryRunner.query(`CREATE INDEX "IDX_a6cb16d99a09b7077e53b67c0c" ON "question_template_entity_hash_tags_hash_tag_entity" ("hashTagEntityId") `);
        await queryRunner.query(`ALTER TABLE "hash_tag_entity" ALTER COLUMN "followersNumber" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "question_template_entity" ADD CONSTRAINT "FK_61e33653ca3e95425b9d2196623" FOREIGN KEY ("creatorId") REFERENCES "user_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "question_template_entity_hash_tags_hash_tag_entity" ADD CONSTRAINT "FK_dff0e4beea8a5e9fe7984d28772" FOREIGN KEY ("questionTemplateEntityId") REFERENCES "question_template_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "question_template_entity_hash_tags_hash_tag_entity" ADD CONSTRAINT "FK_a6cb16d99a09b7077e53b67c0c8" FOREIGN KEY ("hashTagEntityId") REFERENCES "hash_tag_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "question_template_entity_hash_tags_hash_tag_entity" DROP CONSTRAINT "FK_a6cb16d99a09b7077e53b67c0c8"`);
        await queryRunner.query(`ALTER TABLE "question_template_entity_hash_tags_hash_tag_entity" DROP CONSTRAINT "FK_dff0e4beea8a5e9fe7984d28772"`);
        await queryRunner.query(`ALTER TABLE "question_template_entity" DROP CONSTRAINT "FK_61e33653ca3e95425b9d2196623"`);
        await queryRunner.query(`ALTER TABLE "hash_tag_entity" ALTER COLUMN "followersNumber" DROP NOT NULL`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a6cb16d99a09b7077e53b67c0c"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_dff0e4beea8a5e9fe7984d2877"`);
        await queryRunner.query(`DROP TABLE "question_template_entity_hash_tags_hash_tag_entity"`);
        await queryRunner.query(`DROP TABLE "question_template_entity"`);
    }

}
