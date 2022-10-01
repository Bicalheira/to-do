import { DataSourceOptions } from "typeorm";

export const DatabaseConfig: DataSourceOptions = {
    type: 'mysql',
    host: 'host.docker.internal',
    port: 3306,
    username: 'user',
    password: 'password',
    database: 'todo-database',
    entities: [
        'dist/src/models/*.model{.ts,.js}',
    ],
    synchronize: false,
    migrations: [
        'dist/migrations/*{.ts,.js}'
    ],
}