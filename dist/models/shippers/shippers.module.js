"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippersModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const accounts_module_1 = require("../accounts/accounts.module");
const kitchens_module_1 = require("../kitchens/kitchens.module");
const profile_module_1 = require("../profiles/profile.module");
const shipper_entity_1 = require("./entities/shipper.entity");
const shipper_profile_1 = require("./profile/shipper.profile");
const shippers_controller_1 = require("./shippers.controller");
const shippers_service_1 = require("./shippers.service");
let ShippersModule = class ShippersModule {
};
ShippersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([shipper_entity_1.ShipperEntity]),
            accounts_module_1.AccountsModule,
            profile_module_1.ProfileModule,
            kitchens_module_1.KitchenModule,
        ],
        controllers: [shippers_controller_1.ShippersController],
        providers: [shippers_service_1.ShippersService, shipper_profile_1.ShipperProfile],
        exports: [shippers_service_1.ShippersService],
    })
], ShippersModule);
exports.ShippersModule = ShippersModule;
//# sourceMappingURL=shippers.module.js.map