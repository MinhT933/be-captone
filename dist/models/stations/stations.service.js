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
exports.StationsService = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const stations_entity_1 = require("./entities/stations.entity");
const base_service_1 = require("../base/base.service");
const kitchens_service_1 = require("../kitchens/kitchens.service");
let StationsService = class StationsService extends base_service_1.BaseService {
    constructor(stationsRepository, kitchenService) {
        super(stationsRepository);
        this.stationsRepository = stationsRepository;
        this.kitchenService = kitchenService;
    }
    async getStations() {
        return await this.stationsRepository.find();
    }
    async getStationByKitchenId(filter) {
        const { kitchenId } = filter;
        const stations = await this.stationsRepository.find({
            where: { kitchen: { id: kitchenId }, status: "active" },
        });
        if (!stations || stations.length == 0) {
            throw new common_1.HttpException('No stations found', common_1.HttpStatus.NOT_FOUND);
        }
        return stations;
    }
    async getStationsByStatus(statusFilter) {
        const { status } = statusFilter;
        return await this.stationsRepository.find({
            where: { status: (0, typeorm_1.Like)(Boolean(status) ? status : '%%') },
        });
    }
    async createStation(dto) {
        if (dto.kitchenId == '') {
            return await this.save({
                name: dto.name,
                address: dto.address,
                phone: dto.phone,
                openTime: dto.openTime,
                closeTime: dto.closeTime,
                coordinate: {
                    type: 'Point',
                    coodinate: [dto.coordinate.lattitude, dto.coordinate.longitude],
                },
            });
        }
        else {
            const kitchenFind = await this.kitchenService.findOne({
                where: { id: dto.kitchenId },
            });
            if (!kitchenFind) {
                throw new common_1.HttpException('Kitchen not found', common_1.HttpStatus.NOT_FOUND);
            }
            return await this.save({
                name: dto.name,
                address: dto.address,
                phone: dto.phone,
                openTime: dto.openTime,
                closeTime: dto.closeTime,
                kitchen: kitchenFind,
                coordinate: {
                    type: 'Point',
                    coordinates: [dto.coordinate.lattitude, dto.coordinate.longitude],
                },
            });
        }
    }
    async updateStatusStation(id) {
        const station = await this.stationsRepository.findOne({
            where: { id: id },
        });
        if (!station) {
            throw new common_1.HttpException(`${id} : station not found`, common_1.HttpStatus.NOT_FOUND);
        }
        else {
            if (station.status == "active") {
                await this.stationsRepository.update({ id: id }, { status: "inActive" });
                return 'Station now is inActive';
            }
            else if (station.status == "inActive") {
                await this.stationsRepository.update({ id: id }, { status: "active" });
                return 'Station now is active';
            }
        }
    }
    async updateStation(id, dto) {
        const station = await this.stationsRepository.findOne({
            where: { id: id },
        });
        const kitchenFind = await this.kitchenService.findOne({
            where: { id: dto.kitchenId },
        });
        if (!kitchenFind) {
            throw new common_1.HttpException('Kitchen not found', common_1.HttpStatus.NOT_FOUND);
        }
        if (station) {
            await this.save({
                id: id,
                name: dto.name,
                address: dto.address,
                phone: dto.phone,
                openTime: dto.openTime,
                closeTime: dto.closeTime,
                kitchen: kitchenFind,
            });
            return 'Update station successfull';
        }
        else {
            throw new common_1.HttpException(`Station not found`, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async getStationByKitchen(user) {
        const list = await this.stationsRepository.find({
            where: { status: "active", kitchen: { id: user.id } },
        });
        if (!list || list.length == 0) {
            throw new common_1.HttpException('No station found', common_1.HttpStatus.NOT_FOUND);
        }
        else {
            return list;
        }
    }
};
StationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(stations_entity_1.StationEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        kitchens_service_1.KitchenService])
], StationsService);
exports.StationsService = StationsService;
//# sourceMappingURL=stations.service.js.map