import { ConfigService } from '@nestjs/config';
export declare class JwtConfigService {
    private configService;
    constructor(configService: ConfigService);
    get accessTokenSecret(): string;
    get accessTokenExpiresIn(): string;
    get refreshTokenSecret(): string;
    get refreshTokenExpiresIn(): string;
}
