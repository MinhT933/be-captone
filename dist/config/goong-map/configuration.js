"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('goong-map', () => ({
    APIKey: process.env.GOONG_API_KEY,
    host: process.env.GOONG_HOST,
}));
//# sourceMappingURL=configuration.js.map