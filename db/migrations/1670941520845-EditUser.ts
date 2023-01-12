import { MigrationInterface, QueryRunner } from "typeorm";

export class EditUser1670941520845 implements MigrationInterface {
    name = 'EditUser1670941520845'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_entity" ADD "passedRegistrationSteps" integer DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_entity" DROP COLUMN "passedRegistrationSteps"`);
    }

}
