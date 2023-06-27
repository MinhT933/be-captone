"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeederModule = void 0;
const common_1 = require("@nestjs/common");
const provider_module_1 = require("../../providers/database/mysql/provider.module");
const seeder_1 = require("./seeder");
const roles_module_1 = require("./roles/roles.module");
const accounts_module_1 = require("./accounts/accounts.module");
const time_slots_module_1 = require("./time-slots/time-slots.module");
const banks_module_1 = require("./banks/banks.module");
let SeederModule = class SeederModule {
};
SeederModule = __decorate([
    (0, common_1.Module)({
        imports: [
            provider_module_1.MySQLDatabaseProviderModule,
            roles_module_1.RolesSeederModule,
            accounts_module_1.AccountsSeederModule,
            time_slots_module_1.TimeSlotsSeederModule,
            banks_module_1.BankSeederModule,
        ],
        providers: [seeder_1.Seeder],
    })
], SeederModule);
exports.SeederModule = SeederModule;
//# sourceMappingURL=seeder.module.js.map