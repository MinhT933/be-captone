"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFoodCategoryDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_food_category_1 = require("./create-food-category");
class UpdateFoodCategoryDTO extends (0, swagger_1.PartialType)(create_food_category_1.CreateFoodCategoryDTO) {
}
exports.UpdateFoodCategoryDTO = UpdateFoodCategoryDTO;
//# sourceMappingURL=update-food-category.js.map