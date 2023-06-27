"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KitchenModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const kitchens_service_1 = require("./kitchens.service");
const kitchens_controller_1 = require("./kitchens.controller");
const kitchens_entity_1 = require("./entities/kitchens.entity");
const kitchens_profile_1 = require("./profile/kitchens.profile");
const profile_module_1 = require("../profiles/profile.module");
const accounts_module_1 = require("../accounts/accounts.module");
let KitchenModule = class KitchenModule {
};
KitchenModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([kitchens_entity_1.KitchenEntity]),
            profile_module_1.ProfileModule,
            accounts_module_1.AccountsModule,
        ],
        controllers: [kitchens_controller_1.KitchenController],
        providers: [kitchens_service_1.KitchenService, kitchens_profile_1.KitchenProfile],
        exports: [kitchens_service_1.KitchenService],
    })
], KitchenModule);
exports.KitchenModule = KitchenModule;
//# sourceMappingURL=kitchens.module.js.map