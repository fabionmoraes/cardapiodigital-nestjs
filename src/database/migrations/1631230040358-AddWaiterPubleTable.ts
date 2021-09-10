import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddWaiterPubleTable1631230040358 implements MigrationInterface {
  name = 'AddWaiterPubleTable1631230040358';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`pub_tables\` ADD \`waiterId\` char(36) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`pub_tables\` ADD CONSTRAINT \`FK_dc213d2cd45aa31d7de06dfec0a\` FOREIGN KEY (\`waiterId\`) REFERENCES \`appmenu\`.\`waiters\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`pub_tables\` DROP FOREIGN KEY \`FK_dc213d2cd45aa31d7de06dfec0a\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`pub_tables\` DROP COLUMN \`waiterId\``,
    );
  }
}
