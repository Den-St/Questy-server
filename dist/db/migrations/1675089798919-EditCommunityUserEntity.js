"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditCommunityUserEntity1675089798919 = void 0;
class EditCommunityUserEntity1675089798919 {
    constructor() {
        this.name = 'EditCommunityUserEntity1675089798919';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "community_entity" ADD "creatorId" integer`);
        await queryRunner.query(`ALTER TABLE "community_entity" ADD CONSTRAINT "FK_5f92143f28c9392527add306d78" FOREIGN KEY ("creatorId") REFERENCES "user_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "community_entity" DROP CONSTRAINT "FK_5f92143f28c9392527add306d78"`);
        await queryRunner.query(`ALTER TABLE "community_entity" DROP COLUMN "creatorId"`);
    }
}
exports.EditCommunityUserEntity1675089798919 = EditCommunityUserEntity1675089798919;
//# sourceMappingURL=1675089798919-EditCommunityUserEntity.js.map