import { Repository } from 'typeorm';
import { BaseService } from '../base/base.service';
import { OrdersService } from '../orders/order.service';
import { BatchEntity } from './entities/batch.entity';
export declare class BatchService extends BaseService<BatchEntity> {
    private readonly batchRepository;
    private readonly orderService;
    constructor(batchRepository: Repository<BatchEntity>, orderService: OrdersService);
    getBatchBySessionStation(sessionId: string, stationId: string): Promise<BatchEntity[]>;
    getBatchById(id: string): Promise<BatchEntity>;
    updateStatusBatch(id: string): Promise<string>;
}
