"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditCommunityEntity1675175277508 = void 0;
class EditCommunityEntity1675175277508 {
    constructor() {
        this.name = 'EditCommunityEntity1675175277508';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "community_entity_hash_tags_hash_tag_entity" ("communityEntityId" integer NOT NULL, "hashTagEntityId" integer NOT NULL, CONSTRAINT "PK_26ac6694db0593d6dd819a263fa" PRIMARY KEY ("communityEntityId", "hashTagEntityId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_01d8af3208cb0e45acba75d312" ON "community_entity_hash_tags_hash_tag_entity" ("communityEntityId") `);
        await queryRunner.query(`CREATE INDEX "IDX_eb7335ec1a4476909bb3b215c0" ON "community_entity_hash_tags_hash_tag_entity" ("hashTagEntityId") `);
        await queryRunner.query(`ALTER TABLE "community_entity_hash_tags_hash_tag_entity" ADD CONSTRAINT "FK_01d8af3208cb0e45acba75d3125" FOREIGN KEY ("communityEntityId") REFERENCES "community_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "community_entity_hash_tags_hash_tag_entity" ADD CONSTRAINT "FK_eb7335ec1a4476909bb3b215c03" FOREIGN KEY ("hashTagEntityId") REFERENCES "hash_tag_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "community_entity_hash_tags_hash_tag_entity" DROP CONSTRAINT "FK_eb7335ec1a4476909bb3b215c03"`);
        await queryRunner.query(`ALTER TABLE "community_entity_hash_tags_hash_tag_entity" DROP CONSTRAINT "FK_01d8af3208cb0e45acba75d3125"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_eb7335ec1a4476909bb3b215c0"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_01d8af3208cb0e45acba75d312"`);
        await queryRunner.query(`DROP TABLE "community_entity_hash_tags_hash_tag_entity"`);
    }
}
exports.EditCommunityEntity1675175277508 = EditCommunityEntity1675175277508;
//# sourceMappingURL=1675175277508-EditCommunityEntity.js.map