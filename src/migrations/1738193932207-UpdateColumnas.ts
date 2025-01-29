import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateColumnas1738193932207 implements MigrationInterface {
    name = 'UpdateColumnas1738193932207'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."profile_status_enum" AS ENUM('active', 'inactive', 'deleted')`);
        await queryRunner.query(`ALTER TABLE "profile" ADD "status" "public"."profile_status_enum" NOT NULL DEFAULT 'active'`);
        await queryRunner.query(`ALTER TABLE "profile" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "profile" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "profile" ADD "deleted_at" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "profile" DROP COLUMN "deleted_at"`);
        await queryRunner.query(`ALTER TABLE "profile" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "profile" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "profile" DROP COLUMN "status"`);
        await queryRunner.query(`DROP TYPE "public"."profile_status_enum"`);
    }

}
