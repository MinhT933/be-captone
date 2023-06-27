import { NotificationsService } from './notifications.service';
import { AccountEntity } from '../accounts/entities/account.entity';
import { QueryNotificationDto } from './dto/query-notification.dto';
import { IPaginate } from '../base/base.filter';
import { NotificationDto } from './dto/notification.dto';
export declare class NotificationsController {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsService);
    getMyNotifications(user: AccountEntity, queries: QueryNotificationDto): Promise<IPaginate<NotificationDto>>;
    seenNotification(id: string): Promise<string>;
}
