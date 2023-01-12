import { MigrationInterface, QueryRunner } from "typeorm";

export class EditHashTagsEntities1672781318193 implements MigrationInterface {
    name = 'EditHashTagsEntities1672781318193'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "hash_tag_entity" ADD "description" character varying DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "hash_tag_entity" DROP COLUMN "description"`);
    }

}
