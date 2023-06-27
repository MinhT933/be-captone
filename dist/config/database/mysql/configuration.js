"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('mysql', () => ({
    host: process.env.SQL_HOST,
    port: process.env.SQL_PORT,
    username: process.env.SQL_USERNAME,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE,
}));
//# sourceMappingURL=configuration.js.map