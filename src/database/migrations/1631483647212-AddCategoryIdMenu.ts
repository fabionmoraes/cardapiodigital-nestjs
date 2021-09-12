import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddCategoryIdMenu1631483647212 implements MigrationInterface {
  name = 'AddCategoryIdMenu1631483647212';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`menus\` ADD \`categoryId\` int NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`menus\` ADD CONSTRAINT \`FK_397f228d6b493d0109af3c49d5a\` FOREIGN KEY (\`categoryId\`) REFERENCES \`appmenu\`.\`menu-categories\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`menus\` DROP FOREIGN KEY \`FK_397f228d6b493d0109af3c49d5a\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`menus\` DROP COLUMN \`categoryId\``,
    );
  }
}
