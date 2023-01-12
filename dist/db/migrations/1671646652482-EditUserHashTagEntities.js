"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditUserHashTagEntities1671646652482 = void 0;
class EditUserHashTagEntities1671646652482 {
    constructor() {
        this.name = 'EditUserHashTagEntities1671646652482';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "hash_tag_entity_used_by_user_entity" DROP CONSTRAINT "FK_cf3ef1b81fa937d10c0891e1ada"`);
        await queryRunner.query(`ALTER TABLE "hash_tag_entity_used_by_user_entity" ADD CONSTRAINT "FK_cf3ef1b81fa937d10c0891e1ada" FOREIGN KEY ("userEntityId") REFERENCES "user_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "hash_tag_entity_used_by_user_entity" DROP CONSTRAINT "FK_cf3ef1b81fa937d10c0891e1ada"`);
        await queryRunner.query(`ALTER TABLE "hash_tag_entity_used_by_user_entity" ADD CONSTRAINT "FK_cf3ef1b81fa937d10c0891e1ada" FOREIGN KEY ("userEntityId") REFERENCES "user_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
exports.EditUserHashTagEntities1671646652482 = EditUserHashTagEntities1671646652482;
//# sourceMappingURL=1671646652482-EditUserHashTagEntities.js.map