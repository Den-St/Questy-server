"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditUser1670834152101 = void 0;
class EditUser1670834152101 {
    constructor() {
        this.name = 'EditUser1670834152101';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_entity" ALTER COLUMN "name" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_entity" ALTER COLUMN "name" SET DEFAULT 'not given yet'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_entity" ALTER COLUMN "name" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "user_entity" ALTER COLUMN "name" SET NOT NULL`);
    }
}
exports.EditUser1670834152101 = EditUser1670834152101;
//# sourceMappingURL=1670834152101-EditUser.js.map