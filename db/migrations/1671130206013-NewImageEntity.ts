import { MigrationInterface, QueryRunner } from "typeorm";

export class NewImageEntity1671130206013 implements MigrationInterface {
    name = 'NewImageEntity1671130206013'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "image_entity" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "path" character varying NOT NULL, CONSTRAINT "PK_fb554818daabc01db00d67aafde" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "image_entity"`);
    }

}
