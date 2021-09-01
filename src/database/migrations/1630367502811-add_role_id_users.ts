import { MigrationInterface, QueryRunner } from 'typeorm';

export class addRoleIdUsers1630367502811 implements MigrationInterface {
  name = 'addRoleIdUsers1630367502811';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`reports\`.\`users\` ADD \`roleId\` char(36) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`reports\`.\`users\` ADD CONSTRAINT \`FK_368e146b785b574f42ae9e53d5e\` FOREIGN KEY (\`roleId\`) REFERENCES \`reports\`.\`roles\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`reports\`.\`users\` DROP FOREIGN KEY \`FK_368e146b785b574f42ae9e53d5e\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`reports\`.\`users\` DROP COLUMN \`roleId\``,
    );
  }
}
