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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StationsController = void 0;
const nestjs_1 = require("@automapper/nestjs");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const stations_entity_1 = require("./entities/stations.entity");
const stations_dto_1 = require("./dto/stations.dto");
const stations_service_1 = require("./stations.service");
const create_station_dto_1 = require("./dto/create-station.dto");
const update_station_dto_1 = require("./dto/update-station.dto");
const roles_decorator_1 = require("../../decorators/roles.decorator");
const role_enum_1 = require("../../common/enums/role.enum");
const stations_filter_dto_1 = require("./dto/stations-filter.dto");
const user_decorator_1 = require("../../decorators/user.decorator");
const account_entity_1 = require("../accounts/entities/account.entity");
const public_decorator_1 = require("../../decorators/public.decorator");
let StationsController = class StationsController {
    constructor(stationsService) {
        this.stationsService = stationsService;
    }
    async findAll() {
        const listStation = await this.stationsService.getStations();
        if (listStation.length == 0) {
            throw new common_1.HttpException('No data station', common_1.HttpStatus.NOT_FOUND);
        }
        return listStation;
    }
    async getStationByKitchenId(filter) {
        return await this.stationsService.getStationByKitchenId(filter);
    }
    async getStationByKitchen(user) {
        return await this.stationsService.getStationByKitchen(user);
    }
    async getStationByStatus(statusFilter) {
        const listStation = await this.stationsService.getStationsByStatus(statusFilter);
        if (!listStation || listStation.length == 0) {
            throw new common_1.HttpException("Dont't have resource station", common_1.HttpStatus.NOT_FOUND);
        }
        return listStation;
    }
    async findStationById(id) {
        const station = await this.stationsService.findOne({
            where: { id: id },
            relations: { kitchen: { account: { profile: true } } },
        });
        if (!station) {
            throw new common_1.HttpException("Dont't have resource station", common_1.HttpStatus.NOT_FOUND);
        }
        return station;
    }
    async createStation(createDTO) {
        return this.stationsService.createStation(createDTO);
    }
    async updateStation(id, updateDTO) {
        return this.stationsService.updateStation(id, updateDTO);
    }
    async updateStatusStation(id) {
        return await this.stationsService.updateStatusStation(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'GET ALL STATION',
        type: [stations_entity_1.StationEntity],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StationsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/byKitchenId'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'KITCHEN GET STATION',
        type: stations_dto_1.StationDTO,
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [stations_filter_dto_1.StationByKitchenId]),
    __metadata("design:returntype", Promise)
], StationsController.prototype, "getStationByKitchenId", null);
__decorate([
    (0, common_1.Get)('/byKitchen'),
    (0, roles_decorator_1.Roles)(role_enum_1.RoleEnum.KITCHEN),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'KITCHEN GET STATION',
        type: stations_dto_1.StationDTO,
    }),
    __param(0, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [account_entity_1.AccountEntity]),
    __metadata("design:returntype", Promise)
], StationsController.prototype, "getStationByKitchen", null);
__decorate([
    (0, common_1.Get)('/byStatus'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'GET ALL STATION BY STATUS',
        type: [stations_dto_1.StationDTO],
    }),
    (0, common_1.UseInterceptors)((0, nestjs_1.MapInterceptor)(stations_entity_1.StationEntity, stations_dto_1.StationDTO, { isArray: true })),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [stations_filter_dto_1.StationStatusFilter]),
    __metadata("design:returntype", Promise)
], StationsController.prototype, "getStationByStatus", null);
__decorate([
    (0, common_1.Get)('/:id'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'GET STATION BY ID',
        type: stations_dto_1.StationDTO,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StationsController.prototype, "findStationById", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'CREATE STATION',
        type: stations_dto_1.StationDTO,
    }),
    (0, common_1.UseInterceptors)((0, nestjs_1.MapInterceptor)(stations_entity_1.StationEntity, stations_dto_1.StationDTO)),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_station_dto_1.CreateStationDTO]),
    __metadata("design:returntype", Promise)
], StationsController.prototype, "createStation", null);
__decorate([
    (0, common_1.Put)('/:id'),
    (0, roles_decorator_1.Roles)(role_enum_1.RoleEnum.ADMIN),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'UPDATE STATION',
        type: String,
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_station_dto_1.UpdateStationDTO]),
    __metadata("design:returntype", Promise)
], StationsController.prototype, "updateStation", null);
__decorate([
    (0, common_1.Put)('/update-status/:id'),
    (0, roles_decorator_1.Roles)(role_enum_1.RoleEnum.ADMIN),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'UPDATE STATUS STATION',
        type: String,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StationsController.prototype, "updateStatusStation", null);
StationsController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('stations'),
    (0, common_1.Controller)('stations'),
    __metadata("design:paramtypes", [stations_service_1.StationsService])
], StationsController);
exports.StationsController = StationsController;
//# sourceMappingURL=stations.controller.js.map