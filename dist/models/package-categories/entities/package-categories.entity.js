"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageCategoryEntity = void 0;
const classes_1 = require("@automapper/classes");
const base_entity_1 = require("../../base/base.entity");
const packages_entity_1 = require("../../packages/entities/packages.entity");
const typeorm_1 = require("typeorm");
let PackageCategoryEntity = class PackageCategoryEntity extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)(),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], PackageCategoryEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], PackageCategoryEntity.prototype, "image", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => packages_entity_1.PackageEntity),
    (0, typeorm_1.OneToMany)(() => packages_entity_1.PackageEntity, (packages) => packages.packageCategory),
    __metadata("design:type", Array)
], PackageCategoryEntity.prototype, "packages", void 0);
PackageCategoryEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'package_categories' })
], PackageCategoryEntity);
exports.PackageCategoryEntity = PackageCategoryEntity;
//# sourceMappingURL=package-categories.entity.js.map