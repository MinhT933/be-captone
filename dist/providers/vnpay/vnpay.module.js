"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VnpayProviderModule = void 0;
const common_1 = require("@nestjs/common");
const config_module_1 = require("../../config/vnpay/config.module");
const vnpay_service_1 = require("./vnpay.service");
let VnpayProviderModule = class VnpayProviderModule {
};
VnpayProviderModule = __decorate([
    (0, common_1.Module)({
        imports: [config_module_1.VnpayConfigModule],
        providers: [vnpay_service_1.VnpayService],
        exports: [vnpay_service_1.VnpayService],
    })
], VnpayProviderModule);
exports.VnpayProviderModule = VnpayProviderModule;
//# sourceMappingURL=vnpay.module.js.map