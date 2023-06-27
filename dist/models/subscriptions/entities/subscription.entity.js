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
exports.SubscriptionEntity = void 0;
const classes_1 = require("@automapper/classes");
const sub_enum_1 = require("../../../common/enums/sub.enum");
const account_entity_1 = require("../../accounts/entities/account.entity");
const base_entity_1 = require("../../base/base.entity");
const feedback_entity_1 = require("../../feedback/entities/feedback.entity");
const order_entity_1 = require("../../orders/entities/order.entity");
const packages_entity_1 = require("../../packages/entities/packages.entity");
const payment_entity_1 = require("../../payment/entities/payment.entity");
const typeorm_1 = require("typeorm");
let SubscriptionEntity = class SubscriptionEntity extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)(),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Number)
], SubscriptionEntity.prototype, "totalPrice", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Date)
], SubscriptionEntity.prototype, "subscriptionDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: sub_enum_1.SubEnum.UNCONFIRMED }),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], SubscriptionEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => account_entity_1.AccountEntity, (account) => account.subscriptions, {
        nullable: false,
    }),
    (0, classes_1.AutoMap)(() => account_entity_1.AccountEntity),
    __metadata("design:type", account_entity_1.AccountEntity)
], SubscriptionEntity.prototype, "account", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => packages_entity_1.PackageEntity, (packages) => packages.subscriptions, {
        nullable: false,
    }),
    (0, classes_1.AutoMap)(() => packages_entity_1.PackageEntity),
    __metadata("design:type", packages_entity_1.PackageEntity)
], SubscriptionEntity.prototype, "packages", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_entity_1.OrderEntity, (order) => order.subscription),
    (0, classes_1.AutoMap)(() => [order_entity_1.OrderEntity]),
    __metadata("design:type", Array)
], SubscriptionEntity.prototype, "orders", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => payment_entity_1.PaymentEntity, (payment) => payment.subscription),
    __metadata("design:type", payment_entity_1.PaymentEntity)
], SubscriptionEntity.prototype, "payment", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => feedback_entity_1.FeedBackEntity, (feedback) => feedback.subscription),
    __metadata("design:type", feedback_entity_1.FeedBackEntity)
], SubscriptionEntity.prototype, "feedback", void 0);
SubscriptionEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'subscriptions' })
], SubscriptionEntity);
exports.SubscriptionEntity = SubscriptionEntity;
//# sourceMappingURL=subscription.entity.js.map