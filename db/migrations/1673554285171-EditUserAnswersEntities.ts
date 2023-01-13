import { MigrationInterface, QueryRunner } from "typeorm";

export class EditUserAnswersEntities1673554285171 implements MigrationInterface {
    name = 'EditUserAnswersEntities1673554285171'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "use_ent_cor_ans_on_sub_que_ans_ent" ("userEntityId" integer NOT NULL, "answerEntityId" integer NOT NULL, CONSTRAINT "PK_2429029f5d5cc796753cc9cc455" PRIMARY KEY ("userEntityId", "answerEntityId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_6c412f8c011edab6415cb55399" ON "use_ent_cor_ans_on_sub_que_ans_ent" ("userEntityId") `);
        await queryRunner.query(`CREATE INDEX "IDX_8b184019c068571d397c432488" ON "use_ent_cor_ans_on_sub_que_ans_ent" ("answerEntityId") `);
        await queryRunner.query(`ALTER TABLE "use_ent_cor_ans_on_sub_que_ans_ent" ADD CONSTRAINT "FK_6c412f8c011edab6415cb553992" FOREIGN KEY ("userEntityId") REFERENCES "user_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "use_ent_cor_ans_on_sub_que_ans_ent" ADD CONSTRAINT "FK_8b184019c068571d397c4324886" FOREIGN KEY ("answerEntityId") REFERENCES "answer_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "use_ent_cor_ans_on_sub_que_ans_ent" DROP CONSTRAINT "FK_8b184019c068571d397c4324886"`);
        await queryRunner.query(`ALTER TABLE "use_ent_cor_ans_on_sub_que_ans_ent" DROP CONSTRAINT "FK_6c412f8c011edab6415cb553992"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_8b184019c068571d397c432488"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6c412f8c011edab6415cb55399"`);
        await queryRunner.query(`DROP TABLE "use_ent_cor_ans_on_sub_que_ans_ent"`);
    }

}
