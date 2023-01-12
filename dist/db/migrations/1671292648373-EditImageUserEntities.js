"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditImageUserEntities1671292648373 = void 0;
class EditImageUserEntities1671292648373 {
    constructor() {
        this.name = 'EditImageUserEntities1671292648373';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_entity" ADD "avatarId" integer`);
        await queryRunner.query(`ALTER TABLE "user_entity" ADD CONSTRAINT "UQ_b8ff7c4949e12585b6ba48ec676" UNIQUE ("avatarId")`);
        await queryRunner.query(`ALTER TABLE "user_entity" ADD CONSTRAINT "FK_b8ff7c4949e12585b6ba48ec676" FOREIGN KEY ("avatarId") REFERENCES "avatar_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_entity" DROP CONSTRAINT "FK_b8ff7c4949e12585b6ba48ec676"`);
        await queryRunner.query(`ALTER TABLE "user_entity" DROP CONSTRAINT "UQ_b8ff7c4949e12585b6ba48ec676"`);
        await queryRunner.query(`ALTER TABLE "user_entity" DROP COLUMN "avatarId"`);
    }
}
exports.EditImageUserEntities1671292648373 = EditImageUserEntities1671292648373;
//# sourceMappingURL=1671292648373-EditImageUserEntities.js.map