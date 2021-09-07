import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddColumnsStoresAddressC1631031955463
  implements MigrationInterface
{
  name = 'AddColumnsStoresAddressC1631031955463';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`stores\` ADD \`address_number\` int NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`stores\` ADD \`address_complement\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`stores\` ADD \`neighborhood\` varchar(255) NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`stores\` DROP COLUMN \`neighborhood\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`stores\` DROP COLUMN \`address_complement\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`stores\` DROP COLUMN \`address_number\``,
    );
  }
}
