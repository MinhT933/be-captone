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
exports.BankEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../base/base.entity");
const classes_1 = require("@automapper/classes");
const payment_entity_1 = require("../../payment/entities/payment.entity");
let BankEntity = class BankEntity extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)(),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], BankEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], BankEntity.prototype, "bankCode", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => payment_entity_1.PaymentEntity, (payment) => payment.bank),
    __metadata("design:type", Array)
], BankEntity.prototype, "payments", void 0);
BankEntity = __decorate([
    (0, typeorm_1.Entity)('banks')
], BankEntity);
exports.BankEntity = BankEntity;
//# sourceMappingURL=bank.entity.js.map