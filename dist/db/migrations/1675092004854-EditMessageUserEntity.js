"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditMessageUserEntity1675092004854 = void 0;
class EditMessageUserEntity1675092004854 {
    constructor() {
        this.name = 'EditMessageUserEntity1675092004854';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "message_entity" ADD "creatorId" integer`);
        await queryRunner.query(`ALTER TABLE "message_entity" ADD CONSTRAINT "FK_f4501d63bc6ffd2af7420492369" FOREIGN KEY ("creatorId") REFERENCES "user_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "message_entity" DROP CONSTRAINT "FK_f4501d63bc6ffd2af7420492369"`);
        await queryRunner.query(`ALTER TABLE "message_entity" DROP COLUMN "creatorId"`);
    }
}
exports.EditMessageUserEntity1675092004854 = EditMessageUserEntity1675092004854;
//# sourceMappingURL=1675092004854-EditMessageUserEntity.js.map