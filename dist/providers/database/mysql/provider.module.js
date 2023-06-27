"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySQLDatabaseProviderModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const config_module_1 = require("../../../config/database/mysql/config.module");
const config_service_1 = require("../../../config/database/mysql/config.service");
let MySQLDatabaseProviderModule = class MySQLDatabaseProviderModule {
};
MySQLDatabaseProviderModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_module_1.MySQLConfigModule],
                inject: [config_service_1.MySQLConfigService],
                useFactory: (mysqlConfigService) => ({
                    type: 'mysql',
                    host: mysqlConfigService.host,
                    port: mysqlConfigService.port,
                    username: mysqlConfigService.username,
                    password: mysqlConfigService.password,
                    database: mysqlConfigService.database,
                    entities: [__dirname + '/../../../models/**/*.entity.{ts,js}'],
                    synchronize: true,
                    logging: false,
                    legacySpatialSupport: false,
                }),
            }),
        ],
    })
], MySQLDatabaseProviderModule);
exports.MySQLDatabaseProviderModule = MySQLDatabaseProviderModule;
//# sourceMappingURL=provider.module.js.map