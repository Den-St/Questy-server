"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewEntityRole1670263923322 = void 0;
class NewEntityRole1670263923322 {
    constructor() {
        this.name = 'NewEntityRole1670263923322';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "role_entity" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "value" character varying NOT NULL, CONSTRAINT "PK_7bc1bd2364b6e9bf7c84b1e52e2" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "role_entity"`);
    }
}
exports.NewEntityRole1670263923322 = NewEntityRole1670263923322;
//# sourceMappingURL=1670263923322-NewEntityRole.js.map