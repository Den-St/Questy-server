"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewEntityUser1670102159448 = void 0;
class NewEntityUser1670102159448 {
    constructor() {
        this.name = 'NewEntityUser1670102159448';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "user_entity" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_b54f8ea623b17094db7667d8206" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "user_entity"`);
    }
}
exports.NewEntityUser1670102159448 = NewEntityUser1670102159448;
//# sourceMappingURL=1670102159448-NewEntityUser.js.map