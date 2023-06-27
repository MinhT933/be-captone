"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePackageCategoryDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_package_category_1 = require("./create-package-category");
class UpdatePackageCategoryDTO extends (0, swagger_1.PartialType)(create_package_category_1.CreatePackageCategoryDTO) {
}
exports.UpdatePackageCategoryDTO = UpdatePackageCategoryDTO;
//# sourceMappingURL=update-package-category.js.map