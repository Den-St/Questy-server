"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditUserQuestionEntities1673281844103 = void 0;
class EditUserQuestionEntities1673281844103 {
    constructor() {
        this.name = 'EditUserQuestionEntities1673281844103';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "question_entity_rated_up_users_user_entity" ("questionEntityId" integer NOT NULL, "userEntityId" integer NOT NULL, CONSTRAINT "PK_f1d8f9ffc19416dbc82cdea3f00" PRIMARY KEY ("questionEntityId", "userEntityId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_ee855dd646c86bd88f4f84cb5a" ON "question_entity_rated_up_users_user_entity" ("questionEntityId") `);
        await queryRunner.query(`CREATE INDEX "IDX_6d5ba84757bf5a9b7262344c75" ON "question_entity_rated_up_users_user_entity" ("userEntityId") `);
        await queryRunner.query(`ALTER TABLE "question_entity_rated_up_users_user_entity" ADD CONSTRAINT "FK_ee855dd646c86bd88f4f84cb5a9" FOREIGN KEY ("questionEntityId") REFERENCES "question_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "question_entity_rated_up_users_user_entity" ADD CONSTRAINT "FK_6d5ba84757bf5a9b7262344c759" FOREIGN KEY ("userEntityId") REFERENCES "user_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "question_entity_rated_up_users_user_entity" DROP CONSTRAINT "FK_6d5ba84757bf5a9b7262344c759"`);
        await queryRunner.query(`ALTER TABLE "question_entity_rated_up_users_user_entity" DROP CONSTRAINT "FK_ee855dd646c86bd88f4f84cb5a9"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6d5ba84757bf5a9b7262344c75"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ee855dd646c86bd88f4f84cb5a"`);
        await queryRunner.query(`DROP TABLE "question_entity_rated_up_users_user_entity"`);
    }
}
exports.EditUserQuestionEntities1673281844103 = EditUserQuestionEntities1673281844103;
//# sourceMappingURL=1673281844103-EditUserQuestionEntities.js.map