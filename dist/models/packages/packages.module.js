"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagesModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const packages_service_1 = require("./packages.service");
const packages_controller_1 = require("./packages.controller");
const packages_entity_1 = require("./entities/packages.entity");
const package_profile_1 = require("./profile/package.profile");
const package_categories_module_1 = require("../package-categories/package-categories.module");
let PackagesModule = class PackagesModule {
};
PackagesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([packages_entity_1.PackageEntity]), package_categories_module_1.PackageCategoriesModule],
        controllers: [packages_controller_1.PackageController],
        providers: [packages_service_1.PackageService, package_profile_1.PackageProfile],
        exports: [packages_service_1.PackageService],
    })
], PackagesModule);
exports.PackagesModule = PackagesModule;
//# sourceMappingURL=packages.module.js.map