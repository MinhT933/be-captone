"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryTripModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const deliveryTrip_entity_1 = require("./entities/deliveryTrip.entity");
const deliveryTrip_profile_1 = require("./profile/deliveryTrip.profile");
const stations_module_1 = require("../stations/stations.module");
const deliveryTrip_controller_1 = require("./deliveryTrip.controller");
const deliveryTrip_service_1 = require("./deliveryTrip.service");
const kitchens_module_1 = require("../kitchens/kitchens.module");
const shippers_module_1 = require("../shippers/shippers.module");
const order_module_1 = require("../orders/order.module");
const time_slots_module_1 = require("../time-slots/time-slots.module");
const notifications_module_1 = require("../notifications/notifications.module");
const sessions_module_1 = require("../sessions/sessions.module");
const batch_module_1 = require("../batchs/batch.module");
let DeliveryTripModule = class DeliveryTripModule {
};
DeliveryTripModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([deliveryTrip_entity_1.DeliveryTripEntity]),
            stations_module_1.StationsModule,
            order_module_1.OrdersModule,
            kitchens_module_1.KitchenModule,
            shippers_module_1.ShippersModule,
            time_slots_module_1.TimeSlotsModule,
            notifications_module_1.NotificationsModule,
            sessions_module_1.SessionModule,
            batch_module_1.BatchModule,
        ],
        controllers: [deliveryTrip_controller_1.DeliveryTripController],
        providers: [deliveryTrip_service_1.DeliveryTripService, deliveryTrip_profile_1.DeliveryTripProfile],
        exports: [deliveryTrip_service_1.DeliveryTripService],
    })
], DeliveryTripModule);
exports.DeliveryTripModule = DeliveryTripModule;
//# sourceMappingURL=deliveryTrip.module.js.map