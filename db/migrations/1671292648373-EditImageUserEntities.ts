import { MigrationInterface, QueryRunner } from "typeorm";

export class EditImageUserEntities1671292648373 implements MigrationInterface {
    name = 'EditImageUserEntities1671292648373'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_entity" ADD "avatarId" integer`);
        await queryRunner.query(`ALTER TABLE "user_entity" ADD CONSTRAINT "UQ_b8ff7c4949e12585b6ba48ec676" UNIQUE ("avatarId")`);
        await queryRunner.query(`ALTER TABLE "user_entity" ADD CONSTRAINT "FK_b8ff7c4949e12585b6ba48ec676" FOREIGN KEY ("avatarId") REFERENCES "avatar_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_entity" DROP CONSTRAINT "FK_b8ff7c4949e12585b6ba48ec676"`);
        await queryRunner.query(`ALTER TABLE "user_entity" DROP CONSTRAINT "UQ_b8ff7c4949e12585b6ba48ec676"`);
        await queryRunner.query(`ALTER TABLE "user_entity" DROP COLUMN "avatarId"`);
    }

}
