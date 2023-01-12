"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditUser1670943951870 = void 0;
class EditUser1670943951870 {
    constructor() {
        this.name = 'EditUser1670943951870';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_entity" DROP COLUMN "passedRegistrationSteps"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_entity" ADD "passedRegistrationSteps" integer DEFAULT '0'`);
    }
}
exports.EditUser1670943951870 = EditUser1670943951870;
//# sourceMappingURL=1670943951870-EditUser.js.map