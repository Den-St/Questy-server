"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditQuestionUserEntities1670326159864 = void 0;
class EditQuestionUserEntities1670326159864 {
    constructor() {
        this.name = 'EditQuestionUserEntities1670326159864';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "question_entity" ADD "creatorId" integer`);
        await queryRunner.query(`ALTER TABLE "question_entity" ADD CONSTRAINT "FK_c6f679c7241f412e4757433d650" FOREIGN KEY ("creatorId") REFERENCES "user_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "question_entity" DROP CONSTRAINT "FK_c6f679c7241f412e4757433d650"`);
        await queryRunner.query(`ALTER TABLE "question_entity" DROP COLUMN "creatorId"`);
    }
}
exports.EditQuestionUserEntities1670326159864 = EditQuestionUserEntities1670326159864;
//# sourceMappingURL=1670326159864-EditQuestionUserEntities.js.map