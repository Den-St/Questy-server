"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditImageUserEntity1671130440154 = void 0;
class EditImageUserEntity1671130440154 {
    constructor() {
        this.name = 'EditImageUserEntity1671130440154';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "image_entity" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "image_entity" ADD CONSTRAINT "FK_f33358aa5c16e90b71c36933a0a" FOREIGN KEY ("userId") REFERENCES "user_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "image_entity" DROP CONSTRAINT "FK_f33358aa5c16e90b71c36933a0a"`);
        await queryRunner.query(`ALTER TABLE "image_entity" DROP COLUMN "userId"`);
    }
}
exports.EditImageUserEntity1671130440154 = EditImageUserEntity1671130440154;
//# sourceMappingURL=1671130440154-EditImageUserEntity.js.map