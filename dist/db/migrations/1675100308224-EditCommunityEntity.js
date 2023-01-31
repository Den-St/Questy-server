"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditCommunityEntity1675100308224 = void 0;
class EditCommunityEntity1675100308224 {
    constructor() {
        this.name = 'EditCommunityEntity1675100308224';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "community_entity_members_user_entity" ("communityEntityId" integer NOT NULL, "userEntityId" integer NOT NULL, CONSTRAINT "PK_464a7b5d596d90b4407c7112c4e" PRIMARY KEY ("communityEntityId", "userEntityId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_578fbfc3f270c33afec794c532" ON "community_entity_members_user_entity" ("communityEntityId") `);
        await queryRunner.query(`CREATE INDEX "IDX_c25eb8f934bbd93587f212e264" ON "community_entity_members_user_entity" ("userEntityId") `);
        await queryRunner.query(`ALTER TABLE "community_entity_members_user_entity" ADD CONSTRAINT "FK_578fbfc3f270c33afec794c5321" FOREIGN KEY ("communityEntityId") REFERENCES "community_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "community_entity_members_user_entity" ADD CONSTRAINT "FK_c25eb8f934bbd93587f212e2641" FOREIGN KEY ("userEntityId") REFERENCES "user_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "community_entity_members_user_entity" DROP CONSTRAINT "FK_c25eb8f934bbd93587f212e2641"`);
        await queryRunner.query(`ALTER TABLE "community_entity_members_user_entity" DROP CONSTRAINT "FK_578fbfc3f270c33afec794c5321"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c25eb8f934bbd93587f212e264"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_578fbfc3f270c33afec794c532"`);
        await queryRunner.query(`DROP TABLE "community_entity_members_user_entity"`);
    }
}
exports.EditCommunityEntity1675100308224 = EditCommunityEntity1675100308224;
//# sourceMappingURL=1675100308224-EditCommunityEntity.js.map