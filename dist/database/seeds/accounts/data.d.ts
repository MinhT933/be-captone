import { RoleEnum } from 'src/common/enums/role.enum';
import { StatusEnum } from 'src/common/enums/status.enum';
export declare const getData: () => {
    phone: string;
    password: string;
    role: RoleEnum;
    status: StatusEnum;
    fullName: string;
    dob: Date;
    avatar: string;
    email: string;
}[];
