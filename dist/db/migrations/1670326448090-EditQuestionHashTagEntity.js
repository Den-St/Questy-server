"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditQuestionHashTagEntity1670326448090 = void 0;
class EditQuestionHashTagEntity1670326448090 {
    constructor() {
        this.name = 'EditQuestionHashTagEntity1670326448090';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "question_entity_hash_tags_hash_tag_entity" ("questionEntityId" integer NOT NULL, "hashTagEntityId" integer NOT NULL, CONSTRAINT "PK_c36f2429da350764c3c366ced55" PRIMARY KEY ("questionEntityId", "hashTagEntityId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_79f3d9c49aee6dfa62120a2f58" ON "question_entity_hash_tags_hash_tag_entity" ("questionEntityId") `);
        await queryRunner.query(`CREATE INDEX "IDX_7f00d49e9e97be7b6adc0b14fa" ON "question_entity_hash_tags_hash_tag_entity" ("hashTagEntityId") `);
        await queryRunner.query(`ALTER TABLE "question_entity_hash_tags_hash_tag_entity" ADD CONSTRAINT "FK_79f3d9c49aee6dfa62120a2f58a" FOREIGN KEY ("questionEntityId") REFERENCES "question_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "question_entity_hash_tags_hash_tag_entity" ADD CONSTRAINT "FK_7f00d49e9e97be7b6adc0b14faf" FOREIGN KEY ("hashTagEntityId") REFERENCES "hash_tag_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "question_entity_hash_tags_hash_tag_entity" DROP CONSTRAINT "FK_7f00d49e9e97be7b6adc0b14faf"`);
        await queryRunner.query(`ALTER TABLE "question_entity_hash_tags_hash_tag_entity" DROP CONSTRAINT "FK_79f3d9c49aee6dfa62120a2f58a"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_7f00d49e9e97be7b6adc0b14fa"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_79f3d9c49aee6dfa62120a2f58"`);
        await queryRunner.query(`DROP TABLE "question_entity_hash_tags_hash_tag_entity"`);
    }
}
exports.EditQuestionHashTagEntity1670326448090 = EditQuestionHashTagEntity1670326448090;
//# sourceMappingURL=1670326448090-EditQuestionHashTagEntity.js.map