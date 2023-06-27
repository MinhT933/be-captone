"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const role_guard_1 = require("./guards/role.guard");
const core_1 = require("@nestjs/core");
const jwt_auth_guard_1 = require("./guards/jwt-auth.guard");
const config_module_1 = require("./config/app/config.module");
const catch_all_exception_filter_1 = require("./exceptions/catch-all-exception.filter");
const accounts_module_1 = require("./models/accounts/accounts.module");
const provider_module_1 = require("./providers/automapper/provider.module");
const provider_module_2 = require("./providers/database/mysql/provider.module");
const config_module_2 = require("./config/firebase/config.module");
const logging_interceptor_1 = require("./interceptors/logging.interceptor");
const transform_interceptor_1 = require("./interceptors/transform.interceptor");
const food_categories_module_1 = require("./models/food-categories/food-categories.module");
const foods_module_1 = require("./models/foods/foods.module");
const food_group_module_1 = require("./models/food-group/food-group.module");
const stations_module_1 = require("./models/stations/stations.module");
const auth_module_1 = require("./auth/auth.module");
const provider_module_3 = require("./providers/jwt/provider.module");
const time_slots_module_1 = require("./models/time-slots/time-slots.module");
const packages_module_1 = require("./models/packages/packages.module");
const kitchens_module_1 = require("./models/kitchens/kitchens.module");
const deliveryTrip_module_1 = require("./models/deliveryTrips/deliveryTrip.module");
const package_item_module_1 = require("./models/package-item/package-item.module");
const profile_module_1 = require("./models/profiles/profile.module");
const shared_module_1 = require("./shared/shared.module");
const schedule_1 = require("@nestjs/schedule");
const shippers_module_1 = require("./models/shippers/shippers.module");
const order_module_1 = require("./models/orders/order.module");
const provider_module_4 = require("./providers/firebase/provider.module");
const package_categories_module_1 = require("./models/package-categories/package-categories.module");
const subscriptions_module_1 = require("./models/subscriptions/subscriptions.module");
const feedback_module_1 = require("./models/feedback/feedback.module");
const vnpay_module_1 = require("./providers/vnpay/vnpay.module");
const app_controller_1 = require("./app.controller");
const sessions_module_1 = require("./models/sessions/sessions.module");
const batch_module_1 = require("./models/batchs/batch.module");
const config_module_3 = require("./config/goong-map/config.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_module_1.AppConfigModule,
            provider_module_2.MySQLDatabaseProviderModule,
            provider_module_3.JwtProviderModule,
            provider_module_1.AutomapperProviderModule,
            config_module_2.FireBaseConfigModule,
            accounts_module_1.AccountsModule,
            profile_module_1.ProfileModule,
            shared_module_1.SharedModule,
            auth_module_1.AuthModule,
            shippers_module_1.ShippersModule,
            kitchens_module_1.KitchenModule,
            food_categories_module_1.FoodCategoriesModule,
            foods_module_1.FoodsModule,
            food_group_module_1.FoodGroupModule,
            packages_module_1.PackagesModule,
            package_item_module_1.PackageItemModule,
            stations_module_1.StationsModule,
            time_slots_module_1.TimeSlotsModule,
            package_categories_module_1.PackageCategoriesModule,
            subscriptions_module_1.SubscriptionModule,
            order_module_1.OrdersModule,
            provider_module_4.FirebaseProviderModule,
            deliveryTrip_module_1.DeliveryTripModule,
            feedback_module_1.FeedBackModule,
            vnpay_module_1.VnpayProviderModule,
            sessions_module_1.SessionModule,
            batch_module_1.BatchModule,
            config_module_3.GoongMapConfigModule,
            schedule_1.ScheduleModule.forRoot(),
        ],
        controllers: [app_controller_1.TestController],
        providers: [
            { provide: core_1.APP_FILTER, useClass: catch_all_exception_filter_1.AllExceptionsFilter },
            { provide: core_1.APP_INTERCEPTOR, useClass: logging_interceptor_1.LoggingInterceptor },
            { provide: core_1.APP_INTERCEPTOR, useClass: transform_interceptor_1.TransformInterceptor },
            { provide: core_1.APP_GUARD, useClass: jwt_auth_guard_1.JwtAuthGuard },
            { provide: core_1.APP_GUARD, useClass: role_guard_1.RolesGuard },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map