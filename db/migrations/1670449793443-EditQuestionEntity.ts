import { MigrationInterface, QueryRunner } from "typeorm";

export class EditQuestionEntity1670449793443 implements MigrationInterface {
    name = 'EditQuestionEntity1670449793443'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "question_entity" ALTER COLUMN "rating" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "question_entity" ALTER COLUMN "rating" DROP NOT NULL`);
    }

}
