"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditUserAnswersEntities1673429349588 = void 0;
class EditUserAnswersEntities1673429349588 {
    constructor() {
        this.name = 'EditUserAnswersEntities1673429349588';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "answer_entity_subscribers_who_have_not_seen_user_entity" ("answerEntityId" integer NOT NULL, "userEntityId" integer NOT NULL, CONSTRAINT "PK_38cd3b28717b809ae13e015fc84" PRIMARY KEY ("answerEntityId", "userEntityId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_971587a5e1984fdd50d5e47671" ON "answer_entity_subscribers_who_have_not_seen_user_entity" ("answerEntityId") `);
        await queryRunner.query(`CREATE INDEX "IDX_010016efaa4908f9549eba60f3" ON "answer_entity_subscribers_who_have_not_seen_user_entity" ("userEntityId") `);
        await queryRunner.query(`ALTER TABLE "answer_entity_subscribers_who_have_not_seen_user_entity" ADD CONSTRAINT "FK_971587a5e1984fdd50d5e476718" FOREIGN KEY ("answerEntityId") REFERENCES "answer_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "answer_entity_subscribers_who_have_not_seen_user_entity" ADD CONSTRAINT "FK_010016efaa4908f9549eba60f30" FOREIGN KEY ("userEntityId") REFERENCES "user_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "answer_entity_subscribers_who_have_not_seen_user_entity" DROP CONSTRAINT "FK_010016efaa4908f9549eba60f30"`);
        await queryRunner.query(`ALTER TABLE "answer_entity_subscribers_who_have_not_seen_user_entity" DROP CONSTRAINT "FK_971587a5e1984fdd50d5e476718"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_010016efaa4908f9549eba60f3"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_971587a5e1984fdd50d5e47671"`);
        await queryRunner.query(`DROP TABLE "answer_entity_subscribers_who_have_not_seen_user_entity"`);
    }
}
exports.EditUserAnswersEntities1673429349588 = EditUserAnswersEntities1673429349588;
//# sourceMappingURL=1673429349588-EditUserAnswersEntities.js.map