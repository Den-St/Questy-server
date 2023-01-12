"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditUser1670940743615 = void 0;
class EditUser1670940743615 {
    constructor() {
        this.name = 'EditUser1670940743615';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_entity" ADD "gender" character varying DEFAULT 'other'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_entity" DROP COLUMN "gender"`);
    }
}
exports.EditUser1670940743615 = EditUser1670940743615;
//# sourceMappingURL=1670940743615-EditUser.js.map