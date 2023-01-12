"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditUserEntity1671549787582 = void 0;
class EditUserEntity1671549787582 {
    constructor() {
        this.name = 'EditUserEntity1671549787582';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_entity" ADD "about" character varying`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_entity" DROP COLUMN "about"`);
    }
}
exports.EditUserEntity1671549787582 = EditUserEntity1671549787582;
//# sourceMappingURL=1671549787582-EditUserEntity.js.map