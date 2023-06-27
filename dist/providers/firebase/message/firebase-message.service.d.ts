import { Messaging } from 'firebase-admin/lib/messaging/messaging';
import { MessagingDevicesResponse } from 'firebase-admin/lib/messaging/messaging-api';
export declare class FirebaseMessageService {
    sendCustomNotification(registrationTokenOrTokens: string | string[], title: string, body: string, data: {
        [key: string]: string;
    }): Promise<MessagingDevicesResponse>;
    getMessaging(): Messaging;
}
