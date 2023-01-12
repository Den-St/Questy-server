import { MigrationInterface, QueryRunner } from "typeorm";

export class EditQuestionEntity1670449774769 implements MigrationInterface {
    name = 'EditQuestionEntity1670449774769'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "question_entity" ALTER COLUMN "rating" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "question_entity" ALTER COLUMN "rating" SET NOT NULL`);
    }

}
