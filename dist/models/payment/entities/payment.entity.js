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
exports.PaymentEntity = void 0;
const bank_entity_1 = require("../../banks/entities/bank.entity");
const subscription_entity_1 = require("../../subscriptions/entities/subscription.entity");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../base/base.entity");
let PaymentEntity = class PaymentEntity extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], PaymentEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PaymentEntity.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'BankTranNo', nullable: false }),
    __metadata("design:type", String)
], PaymentEntity.prototype, "bankTranNo", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'CardType', nullable: false }),
    __metadata("design:type", String)
], PaymentEntity.prototype, "cardType", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'OrderInfo', nullable: false }),
    __metadata("design:type", String)
], PaymentEntity.prototype, "orderInfo", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'PayDate', nullable: false }),
    __metadata("design:type", String)
], PaymentEntity.prototype, "payDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'TransactionNo', nullable: false }),
    __metadata("design:type", String)
], PaymentEntity.prototype, "transactionNo", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'TransactionStatus', nullable: false }),
    __metadata("design:type", String)
], PaymentEntity.prototype, "transactionStatus", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => bank_entity_1.BankEntity, (bank) => bank.payments),
    (0, typeorm_1.JoinColumn)({ name: 'bankId' }),
    __metadata("design:type", bank_entity_1.BankEntity)
], PaymentEntity.prototype, "bank", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => subscription_entity_1.SubscriptionEntity, (subscription) => subscription.payment),
    (0, typeorm_1.JoinColumn)({ name: 'id' }),
    __metadata("design:type", subscription_entity_1.SubscriptionEntity)
], PaymentEntity.prototype, "subscription", void 0);
PaymentEntity = __decorate([
    (0, typeorm_1.Entity)('payments')
], PaymentEntity);
exports.PaymentEntity = PaymentEntity;
//# sourceMappingURL=payment.entity.js.map