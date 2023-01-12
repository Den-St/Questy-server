"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditUserEntity1671384170792 = void 0;
class EditUserEntity1671384170792 {
    constructor() {
        this.name = 'EditUserEntity1671384170792';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_entity" ADD "occasion" character varying DEFAULT 'not set yet'`);
        await queryRunner.query(`ALTER TABLE "user_entity" ADD "birthdate" character varying DEFAULT 'not set yet'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_entity" DROP COLUMN "birthdate"`);
        await queryRunner.query(`ALTER TABLE "user_entity" DROP COLUMN "occasion"`);
    }
}
exports.EditUserEntity1671384170792 = EditUserEntity1671384170792;
//# sourceMappingURL=1671384170792-EditUserEntity.js.map