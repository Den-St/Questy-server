"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditRoleEntity1670267604796 = void 0;
class EditRoleEntity1670267604796 {
    constructor() {
        this.name = 'EditRoleEntity1670267604796';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_entity" ADD "roleId" integer`);
        await queryRunner.query(`ALTER TABLE "user_entity" ADD CONSTRAINT "FK_95ab8e7157a5bb4bc0e51aefdd2" FOREIGN KEY ("roleId") REFERENCES "role_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_entity" DROP CONSTRAINT "FK_95ab8e7157a5bb4bc0e51aefdd2"`);
        await queryRunner.query(`ALTER TABLE "user_entity" DROP COLUMN "roleId"`);
    }
}
exports.EditRoleEntity1670267604796 = EditRoleEntity1670267604796;
//# sourceMappingURL=1670267604796-EditRoleEntity.js.map