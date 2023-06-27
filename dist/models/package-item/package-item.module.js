"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageItemModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const food_group_module_1 = require("../food-group/food-group.module");
const packages_module_1 = require("../packages/packages.module");
const package_item_entity_1 = require("./entities/package-item.entity");
const package_item_controller_1 = require("./package-item.controller");
const package_item_service_1 = require("./package-item.service");
const package_item_profile_1 = require("./profile/package-item.profile");
let PackageItemModule = class PackageItemModule {
};
PackageItemModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([package_item_entity_1.PackageItemEntity]),
            packages_module_1.PackagesModule,
            food_group_module_1.FoodGroupModule,
        ],
        controllers: [package_item_controller_1.PackageItemController],
        providers: [package_item_service_1.PackageItemService, package_item_profile_1.PackageItemProfile],
        exports: [package_item_service_1.PackageItemService],
    })
], PackageItemModule);
exports.PackageItemModule = PackageItemModule;
//# sourceMappingURL=package-item.module.js.map