import { DataSource } from "typeorm";
import Usuario from "./models/entities/Usuario";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "projeto",
    synchronize: true,
    logging: true,
    entities: [Usuario],
    subscribers: [],
    migrations: [],
})
