"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const config_module_1 = require("../config/jwt/config.module");
const accounts_module_1 = require("../models/accounts/accounts.module");
const kitchens_module_1 = require("../models/kitchens/kitchens.module");
const profile_module_1 = require("../models/profiles/profile.module");
const roles_module_1 = require("../models/roles/roles.module");
const shippers_module_1 = require("../models/shippers/shippers.module");
const provider_module_1 = require("../providers/jwt/provider.module");
const shared_module_1 = require("../shared/shared.module");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const jwt_stratery_1 = require("./jwt.stratery");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            shippers_module_1.ShippersModule,
            accounts_module_1.AccountsModule,
            roles_module_1.RolesModule,
            config_module_1.JwtConfigModule,
            provider_module_1.JwtProviderModule,
            profile_module_1.ProfileModule,
            shared_module_1.SharedModule,
            kitchens_module_1.KitchenModule,
        ],
        controllers: [auth_controller_1.AuthenticationController],
        providers: [auth_service_1.AuthService, jwt_stratery_1.JwtStratery],
        exports: [auth_service_1.AuthService],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map