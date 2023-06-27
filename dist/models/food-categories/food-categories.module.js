"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodCategoriesModule = void 0;
const food_categories_profile_1 = require("./profile/food-categories.profile");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const food_categories_entity_1 = require("./entities/food-categories.entity");
const food_categories_controller_1 = require("./food-categories.controller");
const food_categories_service_1 = require("./food-categories.service");
let FoodCategoriesModule = class FoodCategoriesModule {
};
FoodCategoriesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([food_categories_entity_1.FoodCategoryEntity])],
        controllers: [food_categories_controller_1.FoodCategoriesController],
        providers: [food_categories_service_1.FoodCategoriesService, food_categories_profile_1.FoodCategoriesProfile],
        exports: [food_categories_service_1.FoodCategoriesService],
    })
], FoodCategoriesModule);
exports.FoodCategoriesModule = FoodCategoriesModule;
//# sourceMappingURL=food-categories.module.js.map