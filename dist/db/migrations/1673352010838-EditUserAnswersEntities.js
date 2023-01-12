"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditUserAnswersEntities1673352010838 = void 0;
class EditUserAnswersEntities1673352010838 {
    constructor() {
        this.name = 'EditUserAnswersEntities1673352010838';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "answer_entity_rated_up_users_user_entity" ("answerEntityId" integer NOT NULL, "userEntityId" integer NOT NULL, CONSTRAINT "PK_1d6cdb97fede92439d6c0c890fc" PRIMARY KEY ("answerEntityId", "userEntityId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_afaa5fa388abc69806d8063296" ON "answer_entity_rated_up_users_user_entity" ("answerEntityId") `);
        await queryRunner.query(`CREATE INDEX "IDX_4e95a1a7209e8c0ba67a494c80" ON "answer_entity_rated_up_users_user_entity" ("userEntityId") `);
        await queryRunner.query(`CREATE TABLE "answer_entity_rated_down_users_user_entity" ("answerEntityId" integer NOT NULL, "userEntityId" integer NOT NULL, CONSTRAINT "PK_88dc0ed3ba32e59183599a862de" PRIMARY KEY ("answerEntityId", "userEntityId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_60b7bab17609e2c9ade6c86a22" ON "answer_entity_rated_down_users_user_entity" ("answerEntityId") `);
        await queryRunner.query(`CREATE INDEX "IDX_d49f714b8b2304d1fa062d9e18" ON "answer_entity_rated_down_users_user_entity" ("userEntityId") `);
        await queryRunner.query(`ALTER TABLE "answer_entity_rated_up_users_user_entity" ADD CONSTRAINT "FK_afaa5fa388abc69806d8063296a" FOREIGN KEY ("answerEntityId") REFERENCES "answer_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "answer_entity_rated_up_users_user_entity" ADD CONSTRAINT "FK_4e95a1a7209e8c0ba67a494c804" FOREIGN KEY ("userEntityId") REFERENCES "user_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "answer_entity_rated_down_users_user_entity" ADD CONSTRAINT "FK_60b7bab17609e2c9ade6c86a229" FOREIGN KEY ("answerEntityId") REFERENCES "answer_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "answer_entity_rated_down_users_user_entity" ADD CONSTRAINT "FK_d49f714b8b2304d1fa062d9e189" FOREIGN KEY ("userEntityId") REFERENCES "user_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "answer_entity_rated_down_users_user_entity" DROP CONSTRAINT "FK_d49f714b8b2304d1fa062d9e189"`);
        await queryRunner.query(`ALTER TABLE "answer_entity_rated_down_users_user_entity" DROP CONSTRAINT "FK_60b7bab17609e2c9ade6c86a229"`);
        await queryRunner.query(`ALTER TABLE "answer_entity_rated_up_users_user_entity" DROP CONSTRAINT "FK_4e95a1a7209e8c0ba67a494c804"`);
        await queryRunner.query(`ALTER TABLE "answer_entity_rated_up_users_user_entity" DROP CONSTRAINT "FK_afaa5fa388abc69806d8063296a"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d49f714b8b2304d1fa062d9e18"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_60b7bab17609e2c9ade6c86a22"`);
        await queryRunner.query(`DROP TABLE "answer_entity_rated_down_users_user_entity"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_4e95a1a7209e8c0ba67a494c80"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_afaa5fa388abc69806d8063296"`);
        await queryRunner.query(`DROP TABLE "answer_entity_rated_up_users_user_entity"`);
    }
}
exports.EditUserAnswersEntities1673352010838 = EditUserAnswersEntities1673352010838;
//# sourceMappingURL=1673352010838-EditUserAnswersEntities.js.map