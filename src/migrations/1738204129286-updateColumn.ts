import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateColumn1738204129286 implements MigrationInterface {
    name = 'UpdateColumn1738204129286'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "profile" DROP COLUMN "bio"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "profile" ADD "bio" text NOT NULL`);
    }

}
