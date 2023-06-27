"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFoodDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_food_dto_1 = require("./create-food.dto");
class UpdateFoodDTO extends (0, swagger_1.PartialType)(create_food_dto_1.CreateFoodDTO) {
}
exports.UpdateFoodDTO = UpdateFoodDTO;
//# sourceMappingURL=update-food.dto.js.map