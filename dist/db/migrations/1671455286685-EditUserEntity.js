"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditUserEntity1671455286685 = void 0;
class EditUserEntity1671455286685 {
    constructor() {
        this.name = 'EditUserEntity1671455286685';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_entity" ADD "location" character varying NOT NULL DEFAULT 'not set yet'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_entity" DROP COLUMN "location"`);
    }
}
exports.EditUserEntity1671455286685 = EditUserEntity1671455286685;
//# sourceMappingURL=1671455286685-EditUserEntity.js.map