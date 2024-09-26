import { AuthPayloadDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { Request } from 'express';
import { SignupDto } from './dto/signup.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signup(signupDto: SignupDto): Promise<{
        id: number;
        name: string;
        email: string;
    }>;
    login(authPayload: AuthPayloadDto): Promise<{
        token: string;
    }>;
    verifyOtp(email: string, otp: string): Promise<{
        token: string;
    }>;
    resendOtp(email: string): Promise<{
        message: string;
    }>;
    status(req: any): Promise<import("../entities/user.entity").User>;
    updateLocation(req: Request, latitude: number, longitude: number, address: string): Promise<{
        message: string;
    }>;
}
