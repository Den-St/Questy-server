"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewImageEntity1671130206013 = void 0;
class NewImageEntity1671130206013 {
    constructor() {
        this.name = 'NewImageEntity1671130206013';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "image_entity" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "path" character varying NOT NULL, CONSTRAINT "PK_fb554818daabc01db00d67aafde" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "image_entity"`);
    }
}
exports.NewImageEntity1671130206013 = NewImageEntity1671130206013;
//# sourceMappingURL=1671130206013-NewImageEntity.js.map