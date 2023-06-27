import { DataSource } from 'typeorm';
export declare class AccountsSeederService {
    private readonly dataSource;
    constructor(dataSource: DataSource);
    addData(): Promise<void>;
}
