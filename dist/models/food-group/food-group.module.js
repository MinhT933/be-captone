"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodGroupModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const food_group_controller_1 = require("./food-group.controller");
const food_group_service_1 = require("./food-group.service");
const food_group_profile_1 = require("./profile/food-group.profile");
const food_group_entity_1 = require("./entities/food-group.entity");
const foods_module_1 = require("../foods/foods.module");
let FoodGroupModule = class FoodGroupModule {
};
FoodGroupModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([food_group_entity_1.FoodGroupEntity]), foods_module_1.FoodsModule],
        controllers: [food_group_controller_1.FoodGroupController],
        providers: [food_group_service_1.FoodGroupService, food_group_profile_1.FoodGroupProfile],
        exports: [food_group_service_1.FoodGroupService],
    })
], FoodGroupModule);
exports.FoodGroupModule = FoodGroupModule;
//# sourceMappingURL=food-group.module.js.map