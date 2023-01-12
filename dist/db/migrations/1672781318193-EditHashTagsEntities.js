"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditHashTagsEntities1672781318193 = void 0;
class EditHashTagsEntities1672781318193 {
    constructor() {
        this.name = 'EditHashTagsEntities1672781318193';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "hash_tag_entity" ADD "description" character varying DEFAULT ''`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "hash_tag_entity" DROP COLUMN "description"`);
    }
}
exports.EditHashTagsEntities1672781318193 = EditHashTagsEntities1672781318193;
//# sourceMappingURL=1672781318193-EditHashTagsEntities.js.map