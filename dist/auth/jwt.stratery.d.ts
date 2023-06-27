import { Strategy } from 'passport-jwt';
import { JwtConfigService } from 'src/config/jwt/config.service';
import { AccountsService } from 'src/models/accounts/accounts.service';
import { AccountEntity } from 'src/models/accounts/entities/account.entity';
import { Payload } from './payload';
declare const JwtStratery_base: new (...args: any[]) => Strategy;
export declare class JwtStratery extends JwtStratery_base {
    private readonly jwtConfigService;
    private readonly accountsServive;
    constructor(jwtConfigService: JwtConfigService, accountsServive: AccountsService);
    validate(payload: Payload): Promise<AccountEntity>;
}
export {};
