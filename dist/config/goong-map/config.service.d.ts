import { ConfigService } from '@nestjs/config';
export declare class GoongMapConfigService {
    private configService;
    constructor(configService: ConfigService);
    get apiKey(): string;
    get host(): string;
}
