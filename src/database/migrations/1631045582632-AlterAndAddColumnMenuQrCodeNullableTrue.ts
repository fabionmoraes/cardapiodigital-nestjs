import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterAndAddColumnMenuQrCodeNullableTrue1631045582632
  implements MigrationInterface
{
  name = 'AlterAndAddColumnMenuQrCodeNullableTrue1631045582632';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`menus\` ADD \`qrCode\` varchar(255) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`menus\` CHANGE \`image\` \`image\` varchar(255) NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`menus\` CHANGE \`image\` \`image\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`menus\` DROP COLUMN \`qrCode\``,
    );
  }
}
