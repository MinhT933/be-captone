import { AccountEntity } from 'src/models/accounts/entities/account.entity';
import { AuthService } from './auth.service';
import { CheckPhoneDTO, LoginDto } from './dto/login.dto';
import { RefreshTokenDTO } from './dto/refresh-token.dto';
import { RegisterAccountDTO } from './dto/register-account.dto';
import { RegisterCustomerDTO } from './dto/register-customer.dto';
import { RegisterKitchenDTO } from './dto/register-kitchen.dto';
import { RegisterShipperDTO } from './dto/register-shipper.dto';
import { LoginResponseDto } from './response/login-response.dto';
import { RefreshTokenResponseDTO } from './response/refresh-token-response.dto';
export declare class AuthenticationController {
    private readonly authService;
    constructor(authService: AuthService);
    checkExistPhone(phone: CheckPhoneDTO): Promise<LoginResponseDto>;
    checkExistPhoneShipper(phone: CheckPhoneDTO): Promise<LoginResponseDto>;
    checkExistPhoneCustomer(phone: CheckPhoneDTO): Promise<LoginResponseDto>;
    signUpCustomer(dto: RegisterCustomerDTO): Promise<AccountEntity>;
    registerShipper(dto: RegisterShipperDTO): Promise<AccountEntity>;
    registerKitchen(dto: RegisterKitchenDTO): Promise<AccountEntity>;
    registerAdmin(dto: RegisterAccountDTO): Promise<AccountEntity>;
    registerManager(dto: RegisterAccountDTO): Promise<AccountEntity>;
    login(dto: LoginDto): Promise<LoginResponseDto>;
    loginCustomer(dto: LoginDto): Promise<LoginResponseDto>;
    loginShipper(dto: LoginDto): Promise<LoginResponseDto>;
    refreshToken(dto: RefreshTokenDTO): Promise<RefreshTokenResponseDTO>;
    logout(user: AccountEntity): Promise<string>;
}
