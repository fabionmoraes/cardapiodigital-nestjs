import {MigrationInterface, QueryRunner} from "typeorm";

export class Table1630532407121 implements MigrationInterface {
    name = 'Table1630532407121'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`appmenu\`.\`stores\` (\`id\` char(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`cnpj\` varchar(255) NOT NULL, \`company\` varchar(255) NOT NULL, \`company_name\` varchar(255) NULL, \`zip_code\` varchar(255) NULL, \`address\` varchar(255) NOT NULL, \`state\` varchar(255) NOT NULL, \`city\` varchar(255) NOT NULL, \`phone\` varchar(255) NULL, \`email\` varchar(255) NULL, \`active\` tinyint NOT NULL DEFAULT 1, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`userId\` char(36) NULL, UNIQUE INDEX \`IDX_1b0c68bf8b79c9bf8076e378dd\` (\`cnpj\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`appmenu\`.\`users\` (\`id\` char(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`roleId\` char(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`appmenu\`.\`roles\` (\`id\` char(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`appmenu\`.\`stores\` ADD CONSTRAINT \`FK_f36d697e265ed99b80cae6984c9\` FOREIGN KEY (\`userId\`) REFERENCES \`appmenu\`.\`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`appmenu\`.\`users\` ADD CONSTRAINT \`FK_368e146b785b574f42ae9e53d5e\` FOREIGN KEY (\`roleId\`) REFERENCES \`appmenu\`.\`roles\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`appmenu\`.\`users\` DROP FOREIGN KEY \`FK_368e146b785b574f42ae9e53d5e\``);
        await queryRunner.query(`ALTER TABLE \`appmenu\`.\`stores\` DROP FOREIGN KEY \`FK_f36d697e265ed99b80cae6984c9\``);
        await queryRunner.query(`DROP TABLE \`appmenu\`.\`roles\``);
        await queryRunner.query(`DROP TABLE \`appmenu\`.\`users\``);
        await queryRunner.query(`DROP INDEX \`IDX_1b0c68bf8b79c9bf8076e378dd\` ON \`appmenu\`.\`stores\``);
        await queryRunner.query(`DROP TABLE \`appmenu\`.\`stores\``);
    }

}
