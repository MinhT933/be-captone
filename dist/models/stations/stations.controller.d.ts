import { StationEntity } from './entities/stations.entity';
import { StationsService } from './stations.service';
import { CreateStationDTO } from './dto/create-station.dto';
import { UpdateStationDTO } from './dto/update-station.dto';
import { StationByKitchenId, StationStatusFilter } from './dto/stations-filter.dto';
import { AccountEntity } from '../accounts/entities/account.entity';
export declare class StationsController {
    private readonly stationsService;
    constructor(stationsService: StationsService);
    findAll(): Promise<StationEntity[]>;
    getStationByKitchenId(filter: StationByKitchenId): Promise<StationEntity[]>;
    getStationByKitchen(user: AccountEntity): Promise<StationEntity[]>;
    getStationByStatus(statusFilter: StationStatusFilter): Promise<StationEntity[]>;
    findStationById(id: string): Promise<StationEntity>;
    createStation(createDTO: CreateStationDTO): Promise<StationEntity>;
    updateStation(id: string, updateDTO: UpdateStationDTO): Promise<string>;
    updateStatusStation(id: string): Promise<string>;
}
