"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Seeder = void 0;
const common_1 = require("@nestjs/common");
const accounts_service_1 = require("./accounts/accounts.service");
const banks_service_1 = require("./banks/banks.service");
const roles_service_1 = require("./roles/roles.service");
const time_slots_service_1 = require("./time-slots/time-slots.service");
let Seeder = class Seeder {
    constructor(roleService, accountService, timeSlotService, bankService) {
        this.roleService = roleService;
        this.accountService = accountService;
        this.timeSlotService = timeSlotService;
        this.bankService = bankService;
    }
    async insertRoles() {
        return await this.roleService.createRole();
    }
    async insertAccount() {
        return await this.accountService.addData();
    }
    async insertTimeSlot() {
        return await this.timeSlotService.createTimeSlot();
    }
    async insertBank() {
        return await this.bankService.createBank();
    }
};
Seeder = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [roles_service_1.RolesSeederService,
        accounts_service_1.AccountsSeederService,
        time_slots_service_1.TimeSlotsSeederService,
        banks_service_1.BankSeederService])
], Seeder);
exports.Seeder = Seeder;
//# sourceMappingURL=seeder.js.map