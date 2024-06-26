import { DataSource } from "typeorm";

export default new DataSource({
  type: "sqlite",
  database: "./database.sqlite",
  synchronize: true,
  entities: ["src/entities/*.ts"],
  logging: ["query", "error"],
});
