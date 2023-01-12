import { MigrationInterface, QueryRunner } from "typeorm";

export class NewEntityQuestion1670325955434 implements MigrationInterface {
    name = 'NewEntityQuestion1670325955434'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "question_entity" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying NOT NULL, "body" character varying NOT NULL, CONSTRAINT "PK_14a0a509f33d8cd3a96a448dcd7" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "question_entity"`);
    }

}
