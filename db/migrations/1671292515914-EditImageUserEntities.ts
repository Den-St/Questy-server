import { MigrationInterface, QueryRunner } from "typeorm";

export class EditImageUserEntities1671292515914 implements MigrationInterface {
    name = 'EditImageUserEntities1671292515914'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "avatar_entity" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "path" character varying NOT NULL, CONSTRAINT "PK_b3ad7cac7c03911490f4ed9b587" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "avatar_entity"`);
    }

}
