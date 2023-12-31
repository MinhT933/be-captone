"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('app', () => ({
    env: process.env.APP_ENV,
    name: process.env.APP_NAME,
    port: process.env.APP_PORT,
}));
//# sourceMappingURL=configuration.js.map