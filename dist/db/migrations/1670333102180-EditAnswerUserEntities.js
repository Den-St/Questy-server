"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditAnswerUserEntities1670333102180 = void 0;
class EditAnswerUserEntities1670333102180 {
    constructor() {
        this.name = 'EditAnswerUserEntities1670333102180';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "answer_entity" ADD "creatorId" integer`);
        await queryRunner.query(`ALTER TABLE "answer_entity" ADD CONSTRAINT "FK_49d5b5bc2f8bd1dd9da5c77f30c" FOREIGN KEY ("creatorId") REFERENCES "user_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "answer_entity" DROP CONSTRAINT "FK_49d5b5bc2f8bd1dd9da5c77f30c"`);
        await queryRunner.query(`ALTER TABLE "answer_entity" DROP COLUMN "creatorId"`);
    }
}
exports.EditAnswerUserEntities1670333102180 = EditAnswerUserEntities1670333102180;
//# sourceMappingURL=1670333102180-EditAnswerUserEntities.js.map