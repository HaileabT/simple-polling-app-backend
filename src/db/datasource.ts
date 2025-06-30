import { DataSource } from "typeorm";
import { env } from "../shared/utils/env";

const appDataSource = new DataSource({
  type: "postgres",
  host: env.DB_HOST,
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  port: env.DB_PORT,
  database: env.DB_NAME,
  ssl: false,
  synchronize: true,
  logging: false,
  entities: [__dirname + "/entities/**/*.ts"],
});

export { appDataSource };
