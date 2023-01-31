"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditCommunityEntity1675100144768 = void 0;
class EditCommunityEntity1675100144768 {
    constructor() {
        this.name = 'EditCommunityEntity1675100144768';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "community_entity" ADD "name" character varying NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "community_entity" DROP COLUMN "name"`);
    }
}
exports.EditCommunityEntity1675100144768 = EditCommunityEntity1675100144768;
//# sourceMappingURL=1675100144768-EditCommunityEntity.js.map