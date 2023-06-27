import { BatchService } from './batch.service';
import { BatchEntity } from './entities/batch.entity';
export declare class BatchController {
    private readonly batchService;
    constructor(batchService: BatchService);
    getBatchById(id: string): Promise<BatchEntity>;
    updateStatusBatch(id: string): Promise<string>;
}
