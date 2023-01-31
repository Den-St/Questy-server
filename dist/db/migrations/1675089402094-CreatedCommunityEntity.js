"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatedCommunityEntity1675089402094 = void 0;
class CreatedCommunityEntity1675089402094 {
    constructor() {
        this.name = 'CreatedCommunityEntity1675089402094';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "community_entity" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_43aeaac25b2d2ccce251c9ae54b" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "community_entity"`);
    }
}
exports.CreatedCommunityEntity1675089402094 = CreatedCommunityEntity1675089402094;
//# sourceMappingURL=1675089402094-CreatedCommunityEntity.js.map