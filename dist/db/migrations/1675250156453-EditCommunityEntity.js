"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditCommunityEntity1675250156453 = void 0;
class EditCommunityEntity1675250156453 {
    constructor() {
        this.name = 'EditCommunityEntity1675250156453';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "community_entity" ALTER COLUMN "membersNumber" SET DEFAULT '1'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "community_entity" ALTER COLUMN "membersNumber" SET DEFAULT '0'`);
    }
}
exports.EditCommunityEntity1675250156453 = EditCommunityEntity1675250156453;
//# sourceMappingURL=1675250156453-EditCommunityEntity.js.map