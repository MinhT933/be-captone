import { AccountEntity } from '../accounts/entities/account.entity';
import { CreateSessionDTO } from './dto/createSession.dto';
import { SessionByDate } from './dto/session_filter.dto';
import { SessionEntity } from './entities/sessions.entity';
import { SessionService } from './sessions.service';
export declare class SessionControler {
    private readonly sessionService;
    constructor(sessionService: SessionService);
    kitchenGetSessionByDate(user: AccountEntity, filter: SessionByDate): Promise<SessionEntity[]>;
    getSessionDetail(id: string): Promise<SessionEntity>;
    createSession(dto: CreateSessionDTO): Promise<SessionEntity>;
    doneSession(id: string): Promise<SessionEntity>;
}
