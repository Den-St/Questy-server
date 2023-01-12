import { MigrationInterface, QueryRunner } from "typeorm";

export class NewEntityAnswer1670332183093 implements MigrationInterface {
    name = 'NewEntityAnswer1670332183093'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "answer_entity" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "text" character varying NOT NULL, CONSTRAINT "PK_3158283e703015676d2e7c7d862" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "answer_entity"`);
    }

}
