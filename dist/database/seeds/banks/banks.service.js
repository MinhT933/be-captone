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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankSeederService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bank_entity_1 = require("../../../models/banks/entities/bank.entity");
const typeorm_2 = require("typeorm");
const data_1 = require("./data");
let BankSeederService = class BankSeederService {
    constructor(bankRepository) {
        this.bankRepository = bankRepository;
    }
    async createBank() {
        const bankPromise = [];
        const data = (0, data_1.getData)();
        for (const item of data) {
            bankPromise.push(this.bankRepository.save(item));
        }
        await Promise.all(bankPromise);
        console.info('create Bank successfully');
    }
};
BankSeederService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(bank_entity_1.BankEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BankSeederService);
exports.BankSeederService = BankSeederService;
//# sourceMappingURL=banks.service.js.map