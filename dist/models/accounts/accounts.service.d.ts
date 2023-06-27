import { Mapper } from '@automapper/core';
import { Repository, UpdateResult } from 'typeorm';
import { BaseService } from '../base/base.service';
import { AccountFilterDTO, AccountStatusFilter } from './dto/account-filter.dto';
import { AccountEntity } from './entities/account.entity';
import { ChangePasswordDTO } from './dto/changePassword.dto';
export declare class AccountsService extends BaseService<AccountEntity> {
    private readonly accountsRepository;
    private readonly mapper;
    constructor(accountsRepository: Repository<AccountEntity>, mapper: Mapper);
    updateRefreshToken(refreshToken: string, id: string): Promise<UpdateResult>;
    updateDeviceToken(deviceToken: string, id: string): Promise<string>;
    checkTokne(token: string): Promise<string>;
    getAccounts(accountFilter: AccountFilterDTO, statusFilter: AccountStatusFilter): Promise<AccountEntity[]>;
    forgotPassword(user: AccountEntity, newPassword: string): Promise<string>;
    changePassword(user: AccountEntity, data: ChangePasswordDTO): Promise<string>;
    banAccount(id: string, user: AccountEntity): Promise<AccountEntity>;
    unBanAccount(id: string): Promise<AccountEntity>;
    inActiveAccount(id: string, user: AccountEntity): Promise<AccountEntity>;
}
