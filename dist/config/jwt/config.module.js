"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtConfigModule = void 0;
const config_service_1 = require("./config.service");
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
const configuration_1 = require("./configuration");
const Joi = require("joi");
let JwtConfigModule = class JwtConfigModule {
};
JwtConfigModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [configuration_1.default],
                validationSchema: Joi.object({
                    ACCESS_TOKEN_SECRET: Joi.string().required(),
                    ACCESS_TOKEN_EXPIRES_IN: Joi.string().required(),
                    JWT_REFRESH_TOKEN_SECRET: Joi.string().required(),
                    JWT_REFRESH_TOKEN_EXPIRATION_TIME: Joi.string().required(),
                }),
            }),
        ],
        providers: [config_1.ConfigService, config_service_1.JwtConfigService],
        exports: [config_1.ConfigService, config_service_1.JwtConfigService],
    })
], JwtConfigModule);
exports.JwtConfigModule = JwtConfigModule;
//# sourceMappingURL=config.module.js.map