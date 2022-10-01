import { DataSourceOptions } from "typeorm";

export const DatabaseConfig: DataSourceOptions = {
    type: 'mysql',
    host: 'db',
    port: 3306,
    username: 'user',
    password: 'password',
    database: 'todo-database',
    entities: [
        __dirname + '/../../features/*/.entity{.ts,.js}',
    ],
    synchronize: false,
    migrations: [
        __dirname + '/../../../migrations/*/{.ts,.js}'
    ],
}