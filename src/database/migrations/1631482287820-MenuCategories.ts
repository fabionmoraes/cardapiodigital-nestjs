import { MigrationInterface, QueryRunner } from 'typeorm';

export class MenuCategories1631482287820 implements MigrationInterface {
  name = 'MenuCategories1631482287820';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`appmenu\`.\`menu-categories\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`storeId\` char(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`menu-categories\` ADD CONSTRAINT \`FK_8f0022e794bcb2fc3126dd34dc7\` FOREIGN KEY (\`storeId\`) REFERENCES \`appmenu\`.\`stores\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`menu-categories\` DROP FOREIGN KEY \`FK_8f0022e794bcb2fc3126dd34dc7\``,
    );
    await queryRunner.query(`DROP TABLE \`appmenu\`.\`menu-categories\``);
  }
}
