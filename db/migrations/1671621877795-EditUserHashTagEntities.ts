import { MigrationInterface, QueryRunner } from "typeorm";

export class EditUserHashTagEntities1671621877795 implements MigrationInterface {
    name = 'EditUserHashTagEntities1671621877795'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "hash_tag_entity" ADD "usedById" integer`);
        await queryRunner.query(`ALTER TABLE "hash_tag_entity" ADD CONSTRAINT "FK_d0a36c264e9c38b9c05af440a83" FOREIGN KEY ("usedById") REFERENCES "user_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "hash_tag_entity" DROP CONSTRAINT "FK_d0a36c264e9c38b9c05af440a83"`);
        await queryRunner.query(`ALTER TABLE "hash_tag_entity" DROP COLUMN "usedById"`);
    }

}
