"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditCommunityEntity1675170501579 = void 0;
class EditCommunityEntity1675170501579 {
    constructor() {
        this.name = 'EditCommunityEntity1675170501579';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "community_entity" ADD "membersNumber" integer NOT NULL DEFAULT '0'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "community_entity" DROP COLUMN "membersNumber"`);
    }
}
exports.EditCommunityEntity1675170501579 = EditCommunityEntity1675170501579;
//# sourceMappingURL=1675170501579-EditCommunityEntity.js.map