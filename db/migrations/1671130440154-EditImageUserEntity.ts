import { MigrationInterface, QueryRunner } from "typeorm";

export class EditImageUserEntity1671130440154 implements MigrationInterface {
    name = 'EditImageUserEntity1671130440154'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "image_entity" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "image_entity" ADD CONSTRAINT "FK_f33358aa5c16e90b71c36933a0a" FOREIGN KEY ("userId") REFERENCES "user_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "image_entity" DROP CONSTRAINT "FK_f33358aa5c16e90b71c36933a0a"`);
        await queryRunner.query(`ALTER TABLE "image_entity" DROP COLUMN "userId"`);
    }

}
