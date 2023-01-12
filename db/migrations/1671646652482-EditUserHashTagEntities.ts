import { MigrationInterface, QueryRunner } from "typeorm";

export class EditUserHashTagEntities1671646652482 implements MigrationInterface {
    name = 'EditUserHashTagEntities1671646652482'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "hash_tag_entity_used_by_user_entity" DROP CONSTRAINT "FK_cf3ef1b81fa937d10c0891e1ada"`);
        await queryRunner.query(`ALTER TABLE "hash_tag_entity_used_by_user_entity" ADD CONSTRAINT "FK_cf3ef1b81fa937d10c0891e1ada" FOREIGN KEY ("userEntityId") REFERENCES "user_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "hash_tag_entity_used_by_user_entity" DROP CONSTRAINT "FK_cf3ef1b81fa937d10c0891e1ada"`);
        await queryRunner.query(`ALTER TABLE "hash_tag_entity_used_by_user_entity" ADD CONSTRAINT "FK_cf3ef1b81fa937d10c0891e1ada" FOREIGN KEY ("userEntityId") REFERENCES "user_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
