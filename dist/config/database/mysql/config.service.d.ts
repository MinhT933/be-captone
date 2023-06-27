import { ConfigService } from '@nestjs/config';
export declare class MySQLConfigService {
    private configService;
    constructor(configService: ConfigService);
    get host(): string;
    get port(): number;
    get username(): string;
    get password(): string;
    get database(): string;
}
