"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditUser1670102360839 = void 0;
class EditUser1670102360839 {
    constructor() {
        this.name = 'EditUser1670102360839';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_entity" ADD "name" character varying NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_entity" DROP COLUMN "name"`);
    }
}
exports.EditUser1670102360839 = EditUser1670102360839;
//# sourceMappingURL=1670102360839-EditUser.js.map