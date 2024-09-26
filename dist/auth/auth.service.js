"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../entities/user.entity");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
let AuthService = class AuthService {
    constructor(jwtService, userRepository) {
        this.jwtService = jwtService;
        this.userRepository = userRepository;
    }
    generateOtp() {
        const otp = Math.floor(1000 + Math.random() * 9000).toString();
        const otpExpires = new Date();
        otpExpires.setMinutes(otpExpires.getMinutes() + 10);
        return { otp, otpExpires };
    }
    async sendOtpEmail(to, otp) {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: parseInt(process.env.SMTP_PORT, 10) || 465,
            secure: true,
            auth: {
                user: process.env.SMTP_USER || 'bnetworksitsolutions@gmail.com',
                pass: process.env.SMTP_PASS || 'jaea jpyv zrhp qnuh',
            },
        });
        const mailOptions = {
            to,
            subject: 'Your OTP Code',
            text: `Your OTP code is ${otp}`,
            html: `<b>Your OTP code is ${otp}</b>`,
        };
        await transporter.sendMail(mailOptions);
    }
    async findById(id) {
        return await this.userRepository.findOne({ where: { id } });
    }
    async signup(signupDto) {
        const { name, email, password } = signupDto;
        const existingUser = await this.userRepository.findOne({
            where: { email },
        });
        if (existingUser) {
            throw new common_1.ConflictException('Email already exists');
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const { otp, otpExpires } = this.generateOtp();
        const newUser = this.userRepository.create({
            name,
            email,
            password: hashedPassword,
            otp,
            otpExpires,
        });
        await this.userRepository.save(newUser);
        await this.sendOtpEmail(email, otp);
        return { id: newUser.id, name: newUser.name, email: newUser.email };
    }
    async resendOtp(email) {
        const user = await this.userRepository.findOne({ where: { email } });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const { otp, otpExpires } = this.generateOtp();
        user.otp = otp;
        user.otpExpires = otpExpires;
        await this.userRepository.save(user);
        await this.sendOtpEmail(user.email, otp);
        return { message: 'OTP resent successfully' };
    }
    async verifyOtp(email, otp) {
        const user = await this.userRepository.findOne({ where: { email } });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const currentTime = new Date();
        if (user.otp !== otp || currentTime > user.otpExpires) {
            throw new common_1.BadRequestException('Invalid or expired OTP');
        }
        const payload = { id: user.id, name: user.name, email: user.email };
        const token = this.jwtService.sign(payload);
        user.otp = null;
        user.otpExpires = null;
        await this.userRepository.save(user);
        return { token };
    }
    async validateUser({ email, password, }) {
        const user = await this.userRepository.findOne({ where: { email } });
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid email or password');
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('Invalid email or password');
        }
        const payload = {
            id: user.id,
            name: user.name,
            email: user.email,
        };
        const token = this.jwtService.sign(payload);
        return { token };
    }
    async saveLocation(userId, latitude, longitude, address) {
        const user = await this.userRepository.findOne({ where: { id: userId } });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        user.lat = latitude;
        user.long = longitude;
        user.address = address;
        await this.userRepository.save(user);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        typeorm_2.Repository])
], AuthService);
//# sourceMappingURL=auth.service.js.map