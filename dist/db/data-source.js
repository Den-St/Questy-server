"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSourceOptions = void 0;
const typeorm_1 = require("typeorm");
exports.dataSourceOptions = {
    type: 'postgres',
    database: 'questy',
    entities: ['dist/**/*.entity{.js,.ts}'],
    migrations: ['dist/db/migrations/*.js'],
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123456',
    synchronize: false,
    logging: true
};
const dataSource = new typeorm_1.DataSource(exports.dataSourceOptions);
exports.default = dataSource;
//# sourceMappingURL=data-source.js.map