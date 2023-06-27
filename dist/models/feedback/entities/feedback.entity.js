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
exports.FeedBackEntity = void 0;
const classes_1 = require("@automapper/classes");
const base_entity_1 = require("../../base/base.entity");
const subscription_entity_1 = require("../../subscriptions/entities/subscription.entity");
const typeorm_1 = require("typeorm");
let FeedBackEntity = class FeedBackEntity extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)(),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Number)
], FeedBackEntity.prototype, "packageRate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Number)
], FeedBackEntity.prototype, "deliveryRate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], FeedBackEntity.prototype, "comment", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => subscription_entity_1.SubscriptionEntity, (subscription) => subscription.feedback),
    (0, typeorm_1.JoinColumn)({ name: 'id' }),
    __metadata("design:type", subscription_entity_1.SubscriptionEntity)
], FeedBackEntity.prototype, "subscription", void 0);
FeedBackEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'feedback' })
], FeedBackEntity);
exports.FeedBackEntity = FeedBackEntity;
//# sourceMappingURL=feedback.entity.js.map