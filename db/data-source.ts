import { DataSourceOptions,DataSource } from 'typeorm';

export const dataSourceOptions:DataSourceOptions = {
    type:'postgres',
    database:'questy',
    entities:['dist/**/*.entity{.js,.ts}'],
    migrations:['dist/db/migrations/*.js'],
    host:'localhost',//'db' for docker-compose up, 'localhost' for npx @nestjs/cli start --watch
    port:5432,
    username: 'postgres',
    password: '123456',
    synchronize: false,
    logging:true
}

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;