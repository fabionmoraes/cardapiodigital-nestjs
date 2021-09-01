import { MigrationInterface, QueryRunner } from 'typeorm';

export class Customers1630535619300 implements MigrationInterface {
  name = 'Customers1630535619300';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`stores\` DROP FOREIGN KEY \`FK_3cedd689a439a2b9ebbeadbf7eb\``,
    );
    await queryRunner.query(
      `CREATE TABLE \`appmenu\`.\`pub_tables\` (\`id\` char(36) NOT NULL, \`number\` int NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`storeId\` char(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`appmenu\`.\`customers\` (\`id\` char(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`pubTableId\` char(36) NULL, \`storeId\` char(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`stores\` DROP COLUMN \`menusId\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`menus\` DROP FOREIGN KEY \`FK_536db50c0b165a67020313d02f9\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`menus\` CHANGE \`description\` \`description\` varchar(255) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`menus\` CHANGE \`deleted_at\` \`deleted_at\` timestamp(6) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`menus\` CHANGE \`storeId\` \`storeId\` char(36) NULL`,
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
      `ALTER TABLE \`appmenu\`.\`menus\` ADD CONSTRAINT \`FK_536db50c0b165a67020313d02f9\` FOREIGN KEY (\`storeId\`) REFERENCES \`appmenu\`.\`stores\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`users\` ADD CONSTRAINT \`FK_368e146b785b574f42ae9e53d5e\` FOREIGN KEY (\`roleId\`) REFERENCES \`appmenu\`.\`roles\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`stores\` ADD CONSTRAINT \`FK_f36d697e265ed99b80cae6984c9\` FOREIGN KEY (\`userId\`) REFERENCES \`appmenu\`.\`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`pub_tables\` ADD CONSTRAINT \`FK_9b7558c4e41c10209b18db7efb3\` FOREIGN KEY (\`storeId\`) REFERENCES \`appmenu\`.\`stores\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`customers\` ADD CONSTRAINT \`FK_1da1aaa3398347763a1d9a03263\` FOREIGN KEY (\`pubTableId\`) REFERENCES \`appmenu\`.\`pub_tables\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`customers\` ADD CONSTRAINT \`FK_b7837678f3d750698394a80f70a\` FOREIGN KEY (\`storeId\`) REFERENCES \`appmenu\`.\`stores\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`customers\` DROP FOREIGN KEY \`FK_b7837678f3d750698394a80f70a\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`customers\` DROP FOREIGN KEY \`FK_1da1aaa3398347763a1d9a03263\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`pub_tables\` DROP FOREIGN KEY \`FK_9b7558c4e41c10209b18db7efb3\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`stores\` DROP FOREIGN KEY \`FK_f36d697e265ed99b80cae6984c9\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`users\` DROP FOREIGN KEY \`FK_368e146b785b574f42ae9e53d5e\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`menus\` DROP FOREIGN KEY \`FK_536db50c0b165a67020313d02f9\``,
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
      `ALTER TABLE \`appmenu\`.\`menus\` CHANGE \`storeId\` \`storeId\` char(36) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`menus\` CHANGE \`deleted_at\` \`deleted_at\` timestamp(6) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`menus\` CHANGE \`description\` \`description\` varchar(255) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`menus\` ADD CONSTRAINT \`FK_536db50c0b165a67020313d02f9\` FOREIGN KEY (\`storeId\`) REFERENCES \`appmenu\`.\`stores\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`stores\` ADD \`menusId\` char(36) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(`DROP TABLE \`appmenu\`.\`customers\``);
    await queryRunner.query(`DROP TABLE \`appmenu\`.\`pub_tables\``);
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`stores\` ADD CONSTRAINT \`FK_3cedd689a439a2b9ebbeadbf7eb\` FOREIGN KEY (\`menusId\`) REFERENCES \`appmenu\`.\`menus\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}
