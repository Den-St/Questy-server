"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewEntityHashTag1670321715886 = void 0;
class NewEntityHashTag1670321715886 {
    constructor() {
        this.name = 'NewEntityHashTag1670321715886';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "hash_tag_entity" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, CONSTRAINT "PK_cbcd9b18f5ebe387d99cf27060f" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "hash_tag_entity"`);
    }
}
exports.NewEntityHashTag1670321715886 = NewEntityHashTag1670321715886;
//# sourceMappingURL=1670321715886-NewEntityHashTag.js.map