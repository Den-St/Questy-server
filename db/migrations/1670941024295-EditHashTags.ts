import { MigrationInterface, QueryRunner } from "typeorm";

export class EditHashTags1670941024295 implements MigrationInterface {
    name = 'EditHashTags1670941024295'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "hash_tag_entity" ADD "followersNumber" integer DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "hash_tag_entity" ADD "questionsNumber" integer DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "hash_tag_entity" DROP COLUMN "questionsNumber"`);
        await queryRunner.query(`ALTER TABLE "hash_tag_entity" DROP COLUMN "followersNumber"`);
    }

}
