"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const subscription_entity_1 = require("./entities/subscription.entity");
const packages_module_1 = require("../packages/packages.module");
const subscriptions_controller_1 = require("./subscriptions.controller");
const subscriptions_service_1 = require("./subscriptions.service");
const subscription_profile_1 = require("./profile/subscription.profile");
const vnpay_module_1 = require("../../providers/vnpay/vnpay.module");
const payments_module_1 = require("../payment/payments.module");
const banks_module_1 = require("../banks/banks.module");
const order_module_1 = require("../orders/order.module");
const accounts_module_1 = require("../accounts/accounts.module");
const notifications_module_1 = require("../notifications/notifications.module");
const provider_module_1 = require("../../providers/firebase/provider.module");
let SubscriptionModule = class SubscriptionModule {
};
SubscriptionModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([subscription_entity_1.SubscriptionEntity]),
            accounts_module_1.AccountsModule,
            packages_module_1.PackagesModule,
            vnpay_module_1.VnpayProviderModule,
            payments_module_1.PaymentsModule,
            banks_module_1.BanksModule,
            (0, common_1.forwardRef)(() => order_module_1.OrdersModule),
            notifications_module_1.NotificationsModule,
            provider_module_1.FirebaseProviderModule,
        ],
        controllers: [subscriptions_controller_1.SubscriptionController],
        providers: [subscriptions_service_1.SubscriptionService, subscription_profile_1.SubscriptionProfile],
        exports: [subscriptions_service_1.SubscriptionService],
    })
], SubscriptionModule);
exports.SubscriptionModule = SubscriptionModule;
//# sourceMappingURL=subscriptions.module.js.map