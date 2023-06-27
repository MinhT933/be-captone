export declare class SharedService {
    generateOtp(): number;
    verifyOTPSignUp(otp: number, codeVerify: number, dateExpiredVerifyCode: Date): void;
}
