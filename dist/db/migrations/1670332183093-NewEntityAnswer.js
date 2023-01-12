"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewEntityAnswer1670332183093 = void 0;
class NewEntityAnswer1670332183093 {
    constructor() {
        this.name = 'NewEntityAnswer1670332183093';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "answer_entity" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "text" character varying NOT NULL, CONSTRAINT "PK_3158283e703015676d2e7c7d862" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "answer_entity"`);
    }
}
exports.NewEntityAnswer1670332183093 = NewEntityAnswer1670332183093;
//# sourceMappingURL=1670332183093-NewEntityAnswer.js.map