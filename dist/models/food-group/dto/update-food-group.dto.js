"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFoodGroupDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_food_group_dto_1 = require("./create-food-group.dto");
class UpdateFoodGroupDTO extends (0, swagger_1.PartialType)(create_food_group_dto_1.CreateFoodGroupDTO) {
}
exports.UpdateFoodGroupDTO = UpdateFoodGroupDTO;
//# sourceMappingURL=update-food-group.dto.js.map