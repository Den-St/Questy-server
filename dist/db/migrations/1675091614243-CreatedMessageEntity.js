"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatedMessageEntity1675091614243 = void 0;
class CreatedMessageEntity1675091614243 {
    constructor() {
        this.name = 'CreatedMessageEntity1675091614243';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "message_entity" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_45bb3707fbb99a73e831fee41e0" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "message_entity"`);
    }
}
exports.CreatedMessageEntity1675091614243 = CreatedMessageEntity1675091614243;
//# sourceMappingURL=1675091614243-CreatedMessageEntity.js.map