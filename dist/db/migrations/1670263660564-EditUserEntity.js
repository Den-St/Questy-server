"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditUserEntity1670263660564 = void 0;
class EditUserEntity1670263660564 {
    constructor() {
        this.name = 'EditUserEntity1670263660564';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_entity" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_entity" ADD "passwordHash" character varying NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_entity" DROP COLUMN "passwordHash"`);
        await queryRunner.query(`ALTER TABLE "user_entity" DROP COLUMN "email"`);
    }
}
exports.EditUserEntity1670263660564 = EditUserEntity1670263660564;
//# sourceMappingURL=1670263660564-EditUserEntity.js.map