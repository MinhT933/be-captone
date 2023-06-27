import { ConfigService } from '@nestjs/config';
export declare class FireBaseConfigService {
    private configService;
    constructor(configService: ConfigService);
    get projectId(): string;
    get privateKey(): string;
    get clientEmail(): string;
    get storageBucket(): string;
}
