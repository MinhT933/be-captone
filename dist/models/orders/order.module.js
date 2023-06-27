"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const order_controller_1 = require("./order.controller");
const order_service_1 = require("./order.service");
const order_profile_1 = require("./profile/order.profile");
const order_entity_1 = require("./entities/order.entity");
const provider_module_1 = require("../../providers/firebase/provider.module");
const notifications_module_1 = require("../notifications/notifications.module");
const subscriptions_module_1 = require("../subscriptions/subscriptions.module");
const foods_module_1 = require("../foods/foods.module");
const package_item_module_1 = require("../package-item/package-item.module");
const stations_module_1 = require("../stations/stations.module");
const kitchens_module_1 = require("../kitchens/kitchens.module");
const time_slots_module_1 = require("../time-slots/time-slots.module");
const sessions_module_1 = require("../sessions/sessions.module");
const batch_module_1 = require("../batchs/batch.module");
const deliveryTrip_module_1 = require("../deliveryTrips/deliveryTrip.module");
const utils_1 = require("@nestjs/common/utils");
let OrdersModule = class OrdersModule {
};
OrdersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([order_entity_1.OrderEntity]),
            subscriptions_module_1.SubscriptionModule,
            foods_module_1.FoodsModule,
            package_item_module_1.PackageItemModule,
            stations_module_1.StationsModule,
            kitchens_module_1.KitchenModule,
            time_slots_module_1.TimeSlotsModule,
            provider_module_1.FirebaseProviderModule,
            notifications_module_1.NotificationsModule,
            sessions_module_1.SessionModule,
            batch_module_1.BatchModule,
            (0, utils_1.forwardRef)(() => deliveryTrip_module_1.DeliveryTripModule),
        ],
        controllers: [order_controller_1.OrdersController],
        providers: [order_service_1.OrdersService, order_profile_1.OrderProfile],
        exports: [order_service_1.OrdersService],
    })
], OrdersModule);
exports.OrdersModule = OrdersModule;
//# sourceMappingURL=order.module.js.map