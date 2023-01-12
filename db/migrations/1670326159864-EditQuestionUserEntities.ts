import { MigrationInterface, QueryRunner } from "typeorm";

export class EditQuestionUserEntities1670326159864 implements MigrationInterface {
    name = 'EditQuestionUserEntities1670326159864'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "question_entity" ADD "creatorId" integer`);
        await queryRunner.query(`ALTER TABLE "question_entity" ADD CONSTRAINT "FK_c6f679c7241f412e4757433d650" FOREIGN KEY ("creatorId") REFERENCES "user_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "question_entity" DROP CONSTRAINT "FK_c6f679c7241f412e4757433d650"`);
        await queryRunner.query(`ALTER TABLE "question_entity" DROP COLUMN "creatorId"`);
    }

}
