import { MigrationInterface, QueryRunner } from "typeorm";

export class EditMessageUserEntity1675092004854 implements MigrationInterface {
    name = 'EditMessageUserEntity1675092004854'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "message_entity" ADD "creatorId" integer`);
        await queryRunner.query(`ALTER TABLE "message_entity" ADD CONSTRAINT "FK_f4501d63bc6ffd2af7420492369" FOREIGN KEY ("creatorId") REFERENCES "user_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "message_entity" DROP CONSTRAINT "FK_f4501d63bc6ffd2af7420492369"`);
        await queryRunner.query(`ALTER TABLE "message_entity" DROP COLUMN "creatorId"`);
    }

}
