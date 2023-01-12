"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditUserEntity1670344329215 = void 0;
class EditUserEntity1670344329215 {
    constructor() {
        this.name = 'EditUserEntity1670344329215';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_entity" DROP CONSTRAINT "FK_95ab8e7157a5bb4bc0e51aefdd2"`);
        await queryRunner.query(`CREATE TABLE "user_entity_roles_role_entity" ("userEntityId" integer NOT NULL, "roleEntityId" integer NOT NULL, CONSTRAINT "PK_9426d726a48f9c5d9c83c6eb91f" PRIMARY KEY ("userEntityId", "roleEntityId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_3277e83a0656736e30b901d9a3" ON "user_entity_roles_role_entity" ("userEntityId") `);
        await queryRunner.query(`CREATE INDEX "IDX_63f06698e4071b610eca2da812" ON "user_entity_roles_role_entity" ("roleEntityId") `);
        await queryRunner.query(`ALTER TABLE "user_entity" DROP COLUMN "roleId"`);
        await queryRunner.query(`ALTER TABLE "user_entity_roles_role_entity" ADD CONSTRAINT "FK_3277e83a0656736e30b901d9a30" FOREIGN KEY ("userEntityId") REFERENCES "user_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_entity_roles_role_entity" ADD CONSTRAINT "FK_63f06698e4071b610eca2da812c" FOREIGN KEY ("roleEntityId") REFERENCES "role_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_entity_roles_role_entity" DROP CONSTRAINT "FK_63f06698e4071b610eca2da812c"`);
        await queryRunner.query(`ALTER TABLE "user_entity_roles_role_entity" DROP CONSTRAINT "FK_3277e83a0656736e30b901d9a30"`);
        await queryRunner.query(`ALTER TABLE "user_entity" ADD "roleId" integer`);
        await queryRunner.query(`DROP INDEX "public"."IDX_63f06698e4071b610eca2da812"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_3277e83a0656736e30b901d9a3"`);
        await queryRunner.query(`DROP TABLE "user_entity_roles_role_entity"`);
        await queryRunner.query(`ALTER TABLE "user_entity" ADD CONSTRAINT "FK_95ab8e7157a5bb4bc0e51aefdd2" FOREIGN KEY ("roleId") REFERENCES "role_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
exports.EditUserEntity1670344329215 = EditUserEntity1670344329215;
//# sourceMappingURL=1670344329215-EditUserEntity.js.map