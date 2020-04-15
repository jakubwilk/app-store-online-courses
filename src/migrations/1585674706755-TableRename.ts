import {MigrationInterface, QueryRunner} from "typeorm";

export class TableRename1585674706755 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE category RENAME TO categories`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE categories RENAME TO category`);
    }
    
}
