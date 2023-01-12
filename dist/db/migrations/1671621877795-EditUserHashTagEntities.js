"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditUserHashTagEntities1671621877795 = void 0;
class EditUserHashTagEntities1671621877795 {
    constructor() {
        this.name = 'EditUserHashTagEntities1671621877795';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "hash_tag_entity" ADD "usedById" integer`);
        await queryRunner.query(`ALTER TABLE "hash_tag_entity" ADD CONSTRAINT "FK_d0a36c264e9c38b9c05af440a83" FOREIGN KEY ("usedById") REFERENCES "user_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "hash_tag_entity" DROP CONSTRAINT "FK_d0a36c264e9c38b9c05af440a83"`);
        await queryRunner.query(`ALTER TABLE "hash_tag_entity" DROP COLUMN "usedById"`);
    }
}
exports.EditUserHashTagEntities1671621877795 = EditUserHashTagEntities1671621877795;
//# sourceMappingURL=1671621877795-EditUserHashTagEntities.js.map