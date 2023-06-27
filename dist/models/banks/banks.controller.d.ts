import { BanksService } from './banks.service';
import { BankEntity } from './entities/bank.entity';
export declare class BanksController {
    private readonly banksService;
    constructor(banksService: BanksService);
    getBanks(): Promise<BankEntity[]>;
}
