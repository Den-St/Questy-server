"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditHashTags1670941024295 = void 0;
class EditHashTags1670941024295 {
    constructor() {
        this.name = 'EditHashTags1670941024295';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "hash_tag_entity" ADD "followersNumber" integer DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "hash_tag_entity" ADD "questionsNumber" integer DEFAULT '0'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "hash_tag_entity" DROP COLUMN "questionsNumber"`);
        await queryRunner.query(`ALTER TABLE "hash_tag_entity" DROP COLUMN "followersNumber"`);
    }
}
exports.EditHashTags1670941024295 = EditHashTags1670941024295;
//# sourceMappingURL=1670941024295-EditHashTags.js.map