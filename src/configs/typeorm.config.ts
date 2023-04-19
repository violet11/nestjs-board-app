import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeORMConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'cosanostra1982',
    database: 'boardproject',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    // In production mode it has to be false
    synchronize: true
}