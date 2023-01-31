import { MigrationInterface, QueryRunner } from "typeorm";

export class EditMessageQuestionEntity1675093681970 implements MigrationInterface {
    name = 'EditMessageQuestionEntity1675093681970'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "message_entity" ADD "text" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "message_entity" ADD "responseId" integer`);
        await queryRunner.query(`ALTER TABLE "message_entity" ADD "responseText" character varying`);
        await queryRunner.query(`ALTER TABLE "message_entity" ADD "pinnedQuestionId" integer`);
        await queryRunner.query(`ALTER TABLE "message_entity" ADD CONSTRAINT "FK_beb831dda3c5bbd4f12ec164d20" FOREIGN KEY ("pinnedQuestionId") REFERENCES "question_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "message_entity" DROP CONSTRAINT "FK_beb831dda3c5bbd4f12ec164d20"`);
        await queryRunner.query(`ALTER TABLE "message_entity" DROP COLUMN "pinnedQuestionId"`);
        await queryRunner.query(`ALTER TABLE "message_entity" DROP COLUMN "responseText"`);
        await queryRunner.query(`ALTER TABLE "message_entity" DROP COLUMN "responseId"`);
        await queryRunner.query(`ALTER TABLE "message_entity" DROP COLUMN "text"`);
    }

}
