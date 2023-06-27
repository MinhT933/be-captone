"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStationDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_station_dto_1 = require("./create-station.dto");
class UpdateStationDTO extends (0, swagger_1.PartialType)(create_station_dto_1.CreateStationDTO) {
}
exports.UpdateStationDTO = UpdateStationDTO;
//# sourceMappingURL=update-station.dto.js.map