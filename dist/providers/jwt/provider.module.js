"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtProviderModule = void 0;
const config_service_1 = require("./../../config/jwt/config.service");
const config_module_1 = require("./../../config/jwt/config.module");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
let JwtProviderModule = class JwtProviderModule {
};
JwtProviderModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.registerAsync({
                imports: [config_module_1.JwtConfigModule],
                inject: [config_service_1.JwtConfigService],
                useFactory: (jwtConfigService) => ({
                    secret: jwtConfigService.accessTokenSecret,
                    signOptions: { expiresIn: jwtConfigService.accessTokenExpiresIn },
                }),
            }),
        ],
        providers: [jwt_1.JwtService],
        exports: [jwt_1.JwtService],
    })
], JwtProviderModule);
exports.JwtProviderModule = JwtProviderModule;
//# sourceMappingURL=provider.module.js.map