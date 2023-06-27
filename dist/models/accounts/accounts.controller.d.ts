import { AccountsService } from './accounts.service';
import { AccountFilterDTO, AccountStatusFilter } from './dto/account-filter.dto';
import { ForgotPasswordDTO } from './dto/forgotPassword.dto';
import { CheckToken, DeviceTokenDTO } from './dto/deviceToken.dto';
import { AccountEntity } from './entities/account.entity';
import { ChangePasswordDTO } from './dto/changePassword.dto';
export declare class AccountsController {
    private readonly accountsService;
    constructor(accountsService: AccountsService);
    getUserById(id: string): Promise<AccountEntity>;
    getMe(user: AccountEntity): Promise<AccountEntity>;
    checkToken(tokenFilter: CheckToken): Promise<string>;
    getAll(accountFilter: AccountFilterDTO, statusFilter: AccountStatusFilter): Promise<AccountEntity[]>;
    updateDeviceToken(user: AccountEntity, body: DeviceTokenDTO): Promise<string>;
    forgotPassword(user: AccountEntity, dto: ForgotPasswordDTO): Promise<string>;
    changePassword(user: AccountEntity, dto: ChangePasswordDTO): Promise<string>;
    banAccount(id: string, user: AccountEntity): Promise<AccountEntity>;
    unBanAccount(id: string): Promise<AccountEntity>;
    deleteAccount(id: string, user: AccountEntity): Promise<AccountEntity>;
}
