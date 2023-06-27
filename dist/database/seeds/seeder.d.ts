import { AccountsSeederService } from './accounts/accounts.service';
import { BankSeederService } from './banks/banks.service';
import { RolesSeederService } from './roles/roles.service';
import { TimeSlotsSeederService } from './time-slots/time-slots.service';
export declare class Seeder {
    private readonly roleService;
    private readonly accountService;
    private readonly timeSlotService;
    private readonly bankService;
    constructor(roleService: RolesSeederService, accountService: AccountsSeederService, timeSlotService: TimeSlotsSeederService, bankService: BankSeederService);
    insertRoles(): Promise<void>;
    insertAccount(): Promise<void>;
    insertTimeSlot(): Promise<void>;
    insertBank(): Promise<void>;
}
