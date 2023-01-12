import { MigrationInterface, QueryRunner } from "typeorm";

export class EditUserHashTagsEntities1671810041298 implements MigrationInterface {
    name = 'EditUserHashTagsEntities1671810041298'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "hash_tag_entity" ADD "creatorId" integer`);
        await queryRunner.query(`ALTER TABLE "hash_tag_entity" ADD CONSTRAINT "FK_6f10d5d1a44b413fc9c653f49c0" FOREIGN KEY ("creatorId") REFERENCES "user_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "hash_tag_entity" DROP CONSTRAINT "FK_6f10d5d1a44b413fc9c653f49c0"`);
        await queryRunner.query(`ALTER TABLE "hash_tag_entity" DROP COLUMN "creatorId"`);
    }

}
