import { MigrationInterface, QueryRunner } from "typeorm";

export class EditUserQuestionEntities1673281985082 implements MigrationInterface {
    name = 'EditUserQuestionEntities1673281985082'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "question_entity_rated_down_users_user_entity" ("questionEntityId" integer NOT NULL, "userEntityId" integer NOT NULL, CONSTRAINT "PK_ce6a58970058018325b2ee15c33" PRIMARY KEY ("questionEntityId", "userEntityId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_723600debf9865743a0db15c78" ON "question_entity_rated_down_users_user_entity" ("questionEntityId") `);
        await queryRunner.query(`CREATE INDEX "IDX_e8a4c26f5641775e3b534495db" ON "question_entity_rated_down_users_user_entity" ("userEntityId") `);
        await queryRunner.query(`ALTER TABLE "question_entity_rated_down_users_user_entity" ADD CONSTRAINT "FK_723600debf9865743a0db15c780" FOREIGN KEY ("questionEntityId") REFERENCES "question_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "question_entity_rated_down_users_user_entity" ADD CONSTRAINT "FK_e8a4c26f5641775e3b534495db2" FOREIGN KEY ("userEntityId") REFERENCES "user_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "question_entity_rated_down_users_user_entity" DROP CONSTRAINT "FK_e8a4c26f5641775e3b534495db2"`);
        await queryRunner.query(`ALTER TABLE "question_entity_rated_down_users_user_entity" DROP CONSTRAINT "FK_723600debf9865743a0db15c780"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e8a4c26f5641775e3b534495db"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_723600debf9865743a0db15c78"`);
        await queryRunner.query(`DROP TABLE "question_entity_rated_down_users_user_entity"`);
    }

}
