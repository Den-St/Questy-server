"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditUserHashTagsEntities1671810041298 = void 0;
class EditUserHashTagsEntities1671810041298 {
    constructor() {
        this.name = 'EditUserHashTagsEntities1671810041298';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "hash_tag_entity" ADD "creatorId" integer`);
        await queryRunner.query(`ALTER TABLE "hash_tag_entity" ADD CONSTRAINT "FK_6f10d5d1a44b413fc9c653f49c0" FOREIGN KEY ("creatorId") REFERENCES "user_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "hash_tag_entity" DROP CONSTRAINT "FK_6f10d5d1a44b413fc9c653f49c0"`);
        await queryRunner.query(`ALTER TABLE "hash_tag_entity" DROP COLUMN "creatorId"`);
    }
}
exports.EditUserHashTagsEntities1671810041298 = EditUserHashTagsEntities1671810041298;
//# sourceMappingURL=1671810041298-EditUserHashTagsEntities.js.map