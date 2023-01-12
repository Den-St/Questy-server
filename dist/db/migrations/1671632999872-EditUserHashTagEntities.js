"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditUserHashTagEntities1671632999872 = void 0;
class EditUserHashTagEntities1671632999872 {
    constructor() {
        this.name = 'EditUserHashTagEntities1671632999872';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "hash_tag_entity_used_by_user_entity" DROP CONSTRAINT "FK_cf3ef1b81fa937d10c0891e1ada"`);
        await queryRunner.query(`ALTER TABLE "user_entity_hash_tags_in_use_hash_tag_entity" DROP CONSTRAINT "FK_b2be222c2715238ae330d5baaf1"`);
        await queryRunner.query(`ALTER TABLE "hash_tag_entity_used_by_user_entity" ADD CONSTRAINT "FK_cf3ef1b81fa937d10c0891e1ada" FOREIGN KEY ("userEntityId") REFERENCES "user_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_entity_hash_tags_in_use_hash_tag_entity" ADD CONSTRAINT "FK_b2be222c2715238ae330d5baaf1" FOREIGN KEY ("hashTagEntityId") REFERENCES "hash_tag_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_entity_hash_tags_in_use_hash_tag_entity" DROP CONSTRAINT "FK_b2be222c2715238ae330d5baaf1"`);
        await queryRunner.query(`ALTER TABLE "hash_tag_entity_used_by_user_entity" DROP CONSTRAINT "FK_cf3ef1b81fa937d10c0891e1ada"`);
        await queryRunner.query(`ALTER TABLE "user_entity_hash_tags_in_use_hash_tag_entity" ADD CONSTRAINT "FK_b2be222c2715238ae330d5baaf1" FOREIGN KEY ("hashTagEntityId") REFERENCES "hash_tag_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "hash_tag_entity_used_by_user_entity" ADD CONSTRAINT "FK_cf3ef1b81fa937d10c0891e1ada" FOREIGN KEY ("userEntityId") REFERENCES "user_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }
}
exports.EditUserHashTagEntities1671632999872 = EditUserHashTagEntities1671632999872;
//# sourceMappingURL=1671632999872-EditUserHashTagEntities.js.map