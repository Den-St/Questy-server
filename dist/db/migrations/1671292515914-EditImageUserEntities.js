"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditImageUserEntities1671292515914 = void 0;
class EditImageUserEntities1671292515914 {
    constructor() {
        this.name = 'EditImageUserEntities1671292515914';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "avatar_entity" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "path" character varying NOT NULL, CONSTRAINT "PK_b3ad7cac7c03911490f4ed9b587" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "avatar_entity"`);
    }
}
exports.EditImageUserEntities1671292515914 = EditImageUserEntities1671292515914;
//# sourceMappingURL=1671292515914-EditImageUserEntities.js.map