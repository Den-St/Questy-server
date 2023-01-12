"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditUser1670941520845 = void 0;
class EditUser1670941520845 {
    constructor() {
        this.name = 'EditUser1670941520845';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_entity" ADD "passedRegistrationSteps" integer DEFAULT '0'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_entity" DROP COLUMN "passedRegistrationSteps"`);
    }
}
exports.EditUser1670941520845 = EditUser1670941520845;
//# sourceMappingURL=1670941520845-EditUser.js.map