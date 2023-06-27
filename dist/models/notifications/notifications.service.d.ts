import { BaseService } from '../base/base.service';
import { NotificationEntity } from './entities/notification.entity';
import { Repository } from 'typeorm';
import { AccountEntity } from '../accounts/entities/account.entity';
import { QueryNotificationDto } from './dto/query-notification.dto';
import { Mapper } from '@automapper/core';
import { NotificationDto } from './dto/notification.dto';
export declare class NotificationsService extends BaseService<NotificationEntity> {
    private readonly notificationsRepository;
    private readonly mapper;
    constructor(notificationsRepository: Repository<NotificationEntity>, mapper: Mapper);
    getMyNotifications(account: AccountEntity, queries: QueryNotificationDto): Promise<[NotificationDto[], number]>;
    seenNotification(idNotification: string): Promise<string>;
}
