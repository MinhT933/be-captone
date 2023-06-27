"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySQLConfigModule = void 0;
const config_service_1 = require("./config.service");
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
const configuration_1 = require("./configuration");
const Joi = require("joi");
let MySQLConfigModule = class MySQLConfigModule {
};
MySQLConfigModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [configuration_1.default],
                validationSchema: Joi.object({
                    SQL_HOST: Joi.string().required(),
                    SQL_PORT: Joi.number().required(),
                    SQL_USERNAME: Joi.string().required(),
                    SQL_PASSWORD: Joi.string().required(),
                    SQL_DATABASE: Joi.string().required(),
                }),
            }),
        ],
        providers: [config_1.ConfigService, config_service_1.MySQLConfigService],
        exports: [config_1.ConfigService, config_service_1.MySQLConfigService],
    })
], MySQLConfigModule);
exports.MySQLConfigModule = MySQLConfigModule;
//# sourceMappingURL=config.module.js.map