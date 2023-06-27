"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionModule = void 0;
const common_1 = require("@nestjs/common");
const utils_1 = require("@nestjs/common/utils");
const typeorm_1 = require("@nestjs/typeorm");
const batch_module_1 = require("../batchs/batch.module");
const deliveryTrip_module_1 = require("../deliveryTrips/deliveryTrip.module");
const kitchens_module_1 = require("../kitchens/kitchens.module");
const order_module_1 = require("../orders/order.module");
const time_slots_module_1 = require("../time-slots/time-slots.module");
const sessions_entity_1 = require("./entities/sessions.entity");
const sessions_profile_1 = require("./profile/sessions.profile");
const sessions_controller_1 = require("./sessions.controller");
const sessions_service_1 = require("./sessions.service");
let SessionModule = class SessionModule {
};
SessionModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([sessions_entity_1.SessionEntity]),
            kitchens_module_1.KitchenModule,
            time_slots_module_1.TimeSlotsModule,
            (0, utils_1.forwardRef)(() => deliveryTrip_module_1.DeliveryTripModule),
            (0, utils_1.forwardRef)(() => order_module_1.OrdersModule),
            batch_module_1.BatchModule,
        ],
        controllers: [sessions_controller_1.SessionControler],
        providers: [sessions_service_1.SessionService, sessions_profile_1.SessionProfile],
        exports: [sessions_service_1.SessionService],
    })
], SessionModule);
exports.SessionModule = SessionModule;
//# sourceMappingURL=sessions.module.js.map