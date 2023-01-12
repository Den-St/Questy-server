"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewEntityQuestion1670325955434 = void 0;
class NewEntityQuestion1670325955434 {
    constructor() {
        this.name = 'NewEntityQuestion1670325955434';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "question_entity" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying NOT NULL, "body" character varying NOT NULL, CONSTRAINT "PK_14a0a509f33d8cd3a96a448dcd7" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "question_entity"`);
    }
}
exports.NewEntityQuestion1670325955434 = NewEntityQuestion1670325955434;
//# sourceMappingURL=1670325955434-NewEntityQuestion.js.map