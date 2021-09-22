import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import 'dotenv/config';

const config: MysqlConnectionOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ['dist/src/**/*.entity.js'],
  synchronize: false, //Criando o banco automatico ou não no entity
  migrations: ['./dist/src/database/migrations/*.js'],
  cli: {
    migrationsDir: './src/database/migrations',
  },
};

export default config;
