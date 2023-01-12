"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditUserEntity1671385872249 = void 0;
class EditUserEntity1671385872249 {
    constructor() {
        this.name = 'EditUserEntity1671385872249';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_entity" ALTER COLUMN "name" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_entity" ALTER COLUMN "name" SET DEFAULT 'not set yet'`);
        await queryRunner.query(`ALTER TABLE "user_entity" ALTER COLUMN "gender" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_entity" ALTER COLUMN "gender" SET DEFAULT 'not set yet'`);
        await queryRunner.query(`ALTER TABLE "user_entity" ALTER COLUMN "occasion" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_entity" ALTER COLUMN "birthdate" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_entity" ALTER COLUMN "numberOfAnswers" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_entity" ALTER COLUMN "numberOfQuestions" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_entity" ALTER COLUMN "rating" SET NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_entity" ALTER COLUMN "rating" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_entity" ALTER COLUMN "numberOfQuestions" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_entity" ALTER COLUMN "numberOfAnswers" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_entity" ALTER COLUMN "birthdate" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_entity" ALTER COLUMN "occasion" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_entity" ALTER COLUMN "gender" SET DEFAULT 'other'`);
        await queryRunner.query(`ALTER TABLE "user_entity" ALTER COLUMN "gender" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_entity" ALTER COLUMN "name" SET DEFAULT 'not given yet'`);
        await queryRunner.query(`ALTER TABLE "user_entity" ALTER COLUMN "name" DROP NOT NULL`);
    }
}
exports.EditUserEntity1671385872249 = EditUserEntity1671385872249;
//# sourceMappingURL=1671385872249-EditUserEntity.js.map