"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditUserEntity1671545096438 = void 0;
class EditUserEntity1671545096438 {
    constructor() {
        this.name = 'EditUserEntity1671545096438';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_entity" ADD "isDeleted" boolean DEFAULT false`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_entity" DROP COLUMN "isDeleted"`);
    }
}
exports.EditUserEntity1671545096438 = EditUserEntity1671545096438;
//# sourceMappingURL=1671545096438-EditUserEntity.js.map