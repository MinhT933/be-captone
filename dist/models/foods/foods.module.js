"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodsModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const foods_entity_1 = require("./entities/foods.entity");
const foods_controller_1 = require("./foods.controller");
const foods_service_1 = require("./foods.service");
const food_categories_module_1 = require("../food-categories/food-categories.module");
const food_profile_1 = require("./profile/food.profile");
let FoodsModule = class FoodsModule {
};
FoodsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([foods_entity_1.FoodEntity]), food_categories_module_1.FoodCategoriesModule],
        controllers: [foods_controller_1.FoodsController],
        providers: [foods_service_1.FoodsService, food_profile_1.FoodProfile],
        exports: [foods_service_1.FoodsService],
    })
], FoodsModule);
exports.FoodsModule = FoodsModule;
//# sourceMappingURL=foods.module.js.map