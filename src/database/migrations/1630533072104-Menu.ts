import { MigrationInterface, QueryRunner } from 'typeorm';

export class Menu1630533072104 implements MigrationInterface {
  name = 'Menu1630533072104';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`appmenu\`.\`menus\` (\`id\` char(36) NOT NULL, \`title\` varchar(255) NOT NULL, \`description\` varchar(255) NULL, \`price\` decimal(5,2) NOT NULL DEFAULT '0.00', \`image\` varchar(255) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`storeId\` char(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`stores\` ADD \`menusId\` char(36) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`users\` DROP FOREIGN KEY \`FK_368e146b785b574f42ae9e53d5e\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`users\` CHANGE \`roleId\` \`roleId\` char(36) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`stores\` DROP FOREIGN KEY \`FK_f36d697e265ed99b80cae6984c9\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`stores\` CHANGE \`company_name\` \`company_name\` varchar(255) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`stores\` CHANGE \`zip_code\` \`zip_code\` varchar(255) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`stores\` CHANGE \`phone\` \`phone\` varchar(255) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`stores\` CHANGE \`email\` \`email\` varchar(255) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`stores\` CHANGE \`deleted_at\` \`deleted_at\` timestamp(6) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`stores\` CHANGE \`userId\` \`userId\` char(36) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`users\` ADD CONSTRAINT \`FK_368e146b785b574f42ae9e53d5e\` FOREIGN KEY (\`roleId\`) REFERENCES \`appmenu\`.\`roles\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`stores\` ADD CONSTRAINT \`FK_f36d697e265ed99b80cae6984c9\` FOREIGN KEY (\`userId\`) REFERENCES \`appmenu\`.\`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`stores\` ADD CONSTRAINT \`FK_3cedd689a439a2b9ebbeadbf7eb\` FOREIGN KEY (\`menusId\`) REFERENCES \`appmenu\`.\`menus\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`menus\` ADD CONSTRAINT \`FK_536db50c0b165a67020313d02f9\` FOREIGN KEY (\`storeId\`) REFERENCES \`appmenu\`.\`stores\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`menus\` DROP FOREIGN KEY \`FK_536db50c0b165a67020313d02f9\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`stores\` DROP FOREIGN KEY \`FK_3cedd689a439a2b9ebbeadbf7eb\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`stores\` DROP FOREIGN KEY \`FK_f36d697e265ed99b80cae6984c9\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`users\` DROP FOREIGN KEY \`FK_368e146b785b574f42ae9e53d5e\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`stores\` CHANGE \`userId\` \`userId\` char(36) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`stores\` CHANGE \`deleted_at\` \`deleted_at\` timestamp(6) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`stores\` CHANGE \`email\` \`email\` varchar(255) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`stores\` CHANGE \`phone\` \`phone\` varchar(255) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`stores\` CHANGE \`zip_code\` \`zip_code\` varchar(255) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`stores\` CHANGE \`company_name\` \`company_name\` varchar(255) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`stores\` ADD CONSTRAINT \`FK_f36d697e265ed99b80cae6984c9\` FOREIGN KEY (\`userId\`) REFERENCES \`appmenu\`.\`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`users\` CHANGE \`roleId\` \`roleId\` char(36) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`users\` ADD CONSTRAINT \`FK_368e146b785b574f42ae9e53d5e\` FOREIGN KEY (\`roleId\`) REFERENCES \`appmenu\`.\`roles\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`stores\` DROP COLUMN \`menusId\``,
    );
    await queryRunner.query(`DROP TABLE \`appmenu\`.\`menus\``);
  }
}
