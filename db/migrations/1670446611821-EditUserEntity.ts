import { MigrationInterface, QueryRunner } from "typeorm";

export class EditUserEntity1670446611821 implements MigrationInterface {
    name = 'EditUserEntity1670446611821'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_entity" ADD "numberOfAnswers" integer DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "user_entity" ADD "numberOfQuestions" integer DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "user_entity" ADD "rating" integer DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_entity" DROP COLUMN "rating"`);
        await queryRunner.query(`ALTER TABLE "user_entity" DROP COLUMN "numberOfQuestions"`);
        await queryRunner.query(`ALTER TABLE "user_entity" DROP COLUMN "numberOfAnswers"`);
    }

}
