import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUserNameUser1630621786358 implements MigrationInterface {
  name = 'AddUserNameUser1630621786358';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`users\` ADD \`username\` varchar(255) NOT NULL`,
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
      `ALTER TABLE \`appmenu\`.\`waiters\` DROP FOREIGN KEY \`FK_4e3fac0d3501333c5ded8fb227b\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`waiters\` CHANGE \`deleted_at\` \`deleted_at\` timestamp(6) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`waiters\` CHANGE \`storeId\` \`storeId\` char(36) NULL`,
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
      `ALTER TABLE \`appmenu\`.\`pub_tables\` DROP FOREIGN KEY \`FK_9b7558c4e41c10209b18db7efb3\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`pub_tables\` CHANGE \`deleted_at\` \`deleted_at\` timestamp(6) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`pub_tables\` CHANGE \`storeId\` \`storeId\` char(36) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`customers\` DROP FOREIGN KEY \`FK_1da1aaa3398347763a1d9a03263\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`customers\` DROP FOREIGN KEY \`FK_b7837678f3d750698394a80f70a\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`customers\` CHANGE \`deleted_at\` \`deleted_at\` timestamp(6) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`customers\` CHANGE \`pubTableId\` \`pubTableId\` char(36) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`customers\` CHANGE \`storeId\` \`storeId\` char(36) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`menus\` ADD CONSTRAINT \`FK_536db50c0b165a67020313d02f9\` FOREIGN KEY (\`storeId\`) REFERENCES \`appmenu\`.\`stores\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`users\` ADD CONSTRAINT \`FK_368e146b785b574f42ae9e53d5e\` FOREIGN KEY (\`roleId\`) REFERENCES \`appmenu\`.\`roles\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`waiters\` ADD CONSTRAINT \`FK_4e3fac0d3501333c5ded8fb227b\` FOREIGN KEY (\`storeId\`) REFERENCES \`appmenu\`.\`stores\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
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
      `ALTER TABLE \`appmenu\`.\`waiters\` DROP FOREIGN KEY \`FK_4e3fac0d3501333c5ded8fb227b\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`users\` DROP FOREIGN KEY \`FK_368e146b785b574f42ae9e53d5e\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`menus\` DROP FOREIGN KEY \`FK_536db50c0b165a67020313d02f9\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`customers\` CHANGE \`storeId\` \`storeId\` char(36) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`customers\` CHANGE \`pubTableId\` \`pubTableId\` char(36) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`customers\` CHANGE \`deleted_at\` \`deleted_at\` timestamp(6) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`customers\` ADD CONSTRAINT \`FK_b7837678f3d750698394a80f70a\` FOREIGN KEY (\`storeId\`) REFERENCES \`appmenu\`.\`stores\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`customers\` ADD CONSTRAINT \`FK_1da1aaa3398347763a1d9a03263\` FOREIGN KEY (\`pubTableId\`) REFERENCES \`appmenu\`.\`pub_tables\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`pub_tables\` CHANGE \`storeId\` \`storeId\` char(36) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`pub_tables\` CHANGE \`deleted_at\` \`deleted_at\` timestamp(6) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`pub_tables\` ADD CONSTRAINT \`FK_9b7558c4e41c10209b18db7efb3\` FOREIGN KEY (\`storeId\`) REFERENCES \`appmenu\`.\`stores\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
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
      `ALTER TABLE \`appmenu\`.\`waiters\` CHANGE \`storeId\` \`storeId\` char(36) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`waiters\` CHANGE \`deleted_at\` \`deleted_at\` timestamp(6) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appmenu\`.\`waiters\` ADD CONSTRAINT \`FK_4e3fac0d3501333c5ded8fb227b\` FOREIGN KEY (\`storeId\`) REFERENCES \`appmenu\`.\`stores\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
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
      `ALTER TABLE \`appmenu\`.\`users\` DROP COLUMN \`username\``,
    );
  }
}
