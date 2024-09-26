import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { AuthPayloadDto } from './dto/auth.dto';
import { SignupDto } from './dto/signup.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly jwtService;
    private readonly userRepository;
    constructor(jwtService: JwtService, userRepository: Repository<User>);
    private generateOtp;
    private sendOtpEmail;
    findById(id: number): Promise<User>;
    signup(signupDto: SignupDto): Promise<{
        id: number;
        name: string;
        email: string;
    }>;
    resendOtp(email: string): Promise<{
        message: string;
    }>;
    verifyOtp(email: string, otp: string): Promise<{
        token: string;
    }>;
    validateUser({ email, password, }: AuthPayloadDto): Promise<{
        token: string;
    }>;
    saveLocation(userId: number, latitude: number, longitude: number, address: string): Promise<void>;
}
