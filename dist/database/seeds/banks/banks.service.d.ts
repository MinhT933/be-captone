import { BankEntity } from 'src/models/banks/entities/bank.entity';
import { Repository } from 'typeorm';
export declare class BankSeederService {
    private readonly bankRepository;
    constructor(bankRepository: Repository<BankEntity>);
    createBank(): Promise<void>;
}
