import { Repository } from 'typeorm';
import { StationEntity } from './entities/stations.entity';
import { BaseService } from '../base/base.service';
import { CreateStationDTO } from './dto/create-station.dto';
import { UpdateStationDTO } from './dto/update-station.dto';
import { StationByKitchenId, StationStatusFilter } from './dto/stations-filter.dto';
import { AccountEntity } from '../accounts/entities/account.entity';
import { KitchenService } from '../kitchens/kitchens.service';
export declare class StationsService extends BaseService<StationEntity> {
    private readonly stationsRepository;
    private readonly kitchenService;
    constructor(stationsRepository: Repository<StationEntity>, kitchenService: KitchenService);
    getStations(): Promise<StationEntity[]>;
    getStationByKitchenId(filter: StationByKitchenId): Promise<StationEntity[]>;
    getStationsByStatus(statusFilter: StationStatusFilter): Promise<StationEntity[]>;
    createStation(dto: CreateStationDTO): Promise<StationEntity>;
    updateStatusStation(id: string): Promise<string>;
    updateStation(id: string, dto: UpdateStationDTO): Promise<string>;
    getStationByKitchen(user: AccountEntity): Promise<StationEntity[]>;
}
