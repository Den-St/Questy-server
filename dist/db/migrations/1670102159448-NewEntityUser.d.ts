import { MigrationInterface, QueryRunner } from "typeorm";
export declare class NewEntityUser1670102159448 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
