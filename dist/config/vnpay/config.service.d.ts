import { ConfigService } from '@nestjs/config';
export declare class VnpayConfigService {
    private configService;
    constructor(configService: ConfigService);
    get tmnCode(): string;
    get hashSecret(): string;
    get url(): string;
    get returnUrl(): string;
}
