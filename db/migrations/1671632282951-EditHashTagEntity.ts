import { MigrationInterface, QueryRunner } from "typeorm";

export class EditHashTagEntity1671632282951 implements MigrationInterface {
    name = 'EditHashTagEntity1671632282951'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "hash_tag_entity_used_by_user_entity" ("hashTagEntityId" integer NOT NULL, "userEntityId" integer NOT NULL, CONSTRAINT "PK_84f828fbe0b3442e93dcbac57a2" PRIMARY KEY ("hashTagEntityId", "userEntityId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_58db4619f146a85782788cdd14" ON "hash_tag_entity_used_by_user_entity" ("hashTagEntityId") `);
        await queryRunner.query(`CREATE INDEX "IDX_cf3ef1b81fa937d10c0891e1ad" ON "hash_tag_entity_used_by_user_entity" ("userEntityId") `);
        await queryRunner.query(`ALTER TABLE "hash_tag_entity_used_by_user_entity" ADD CONSTRAINT "FK_58db4619f146a85782788cdd146" FOREIGN KEY ("hashTagEntityId") REFERENCES "hash_tag_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "hash_tag_entity_used_by_user_entity" ADD CONSTRAINT "FK_cf3ef1b81fa937d10c0891e1ada" FOREIGN KEY ("userEntityId") REFERENCES "user_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "hash_tag_entity_used_by_user_entity" DROP CONSTRAINT "FK_cf3ef1b81fa937d10c0891e1ada"`);
        await queryRunner.query(`ALTER TABLE "hash_tag_entity_used_by_user_entity" DROP CONSTRAINT "FK_58db4619f146a85782788cdd146"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_cf3ef1b81fa937d10c0891e1ad"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_58db4619f146a85782788cdd14"`);
        await queryRunner.query(`DROP TABLE "hash_tag_entity_used_by_user_entity"`);
    }

}
