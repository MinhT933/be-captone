import { BaseService } from '../base/base.service';
import { BankEntity } from './entities/bank.entity';
import { Repository } from 'typeorm';
export declare class BanksService extends BaseService<BankEntity> {
    private readonly banksRepository;
    constructor(banksRepository: Repository<BankEntity>);
}
