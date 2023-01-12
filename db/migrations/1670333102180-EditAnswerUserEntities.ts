import { MigrationInterface, QueryRunner } from "typeorm";

export class EditAnswerUserEntities1670333102180 implements MigrationInterface {
    name = 'EditAnswerUserEntities1670333102180'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "answer_entity" ADD "creatorId" integer`);
        await queryRunner.query(`ALTER TABLE "answer_entity" ADD CONSTRAINT "FK_49d5b5bc2f8bd1dd9da5c77f30c" FOREIGN KEY ("creatorId") REFERENCES "user_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "answer_entity" DROP CONSTRAINT "FK_49d5b5bc2f8bd1dd9da5c77f30c"`);
        await queryRunner.query(`ALTER TABLE "answer_entity" DROP COLUMN "creatorId"`);
    }

}
