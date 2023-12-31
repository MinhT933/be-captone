"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchModule = void 0;
const common_1 = require("@nestjs/common");
const utils_1 = require("@nestjs/common/utils");
const typeorm_1 = require("@nestjs/typeorm");
const order_module_1 = require("../orders/order.module");
const batch_controller_1 = require("./batch.controller");
const batch_service_1 = require("./batch.service");
const batch_entity_1 = require("./entities/batch.entity");
const batch_profile_1 = require("./profile/batch.profile");
let BatchModule = class BatchModule {
};
BatchModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([batch_entity_1.BatchEntity]),
            (0, utils_1.forwardRef)(() => order_module_1.OrdersModule),
        ],
        controllers: [batch_controller_1.BatchController],
        providers: [batch_service_1.BatchService, batch_profile_1.BatchProfile],
        exports: [batch_service_1.BatchService],
    })
], BatchModule);
exports.BatchModule = BatchModule;
//# sourceMappingURL=batch.module.js.map