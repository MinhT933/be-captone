"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageCategoriesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const package_categories_entity_1 = require("./entities/package-categories.entity");
const package_categories_controller_1 = require("./package-categories.controller");
const package_categories_service_1 = require("./package-categories.service");
const package_categories_profile_1 = require("./profile/package-categories.profile");
let PackageCategoriesModule = class PackageCategoriesModule {
};
PackageCategoriesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([package_categories_entity_1.PackageCategoryEntity])],
        controllers: [package_categories_controller_1.PackgeCategoriesController],
        providers: [package_categories_service_1.PackageCategoriesService, package_categories_profile_1.PackageCategoriesProfile],
        exports: [package_categories_service_1.PackageCategoriesService],
    })
], PackageCategoriesModule);
exports.PackageCategoriesModule = PackageCategoriesModule;
//# sourceMappingURL=package-categories.module.js.map