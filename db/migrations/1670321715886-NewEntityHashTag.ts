import { MigrationInterface, QueryRunner } from "typeorm";

export class NewEntityHashTag1670321715886 implements MigrationInterface {
    name = 'NewEntityHashTag1670321715886'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "hash_tag_entity" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, CONSTRAINT "PK_cbcd9b18f5ebe387d99cf27060f" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "hash_tag_entity"`);
    }

}
