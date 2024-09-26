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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_dto_1 = require("./dto/auth.dto");
const auth_service_1 = require("./auth.service");
const local_guard_1 = require("./guards/local.guard");
const jwt_guard_1 = require("./guards/jwt.guard");
const signup_dto_1 = require("./dto/signup.dto");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async signup(signupDto) {
        return this.authService.signup(signupDto);
    }
    login(authPayload) {
        console.log(authPayload);
        return this.authService.validateUser(authPayload);
    }
    async verifyOtp(email, otp) {
        if (!email || !otp) {
            throw new common_1.BadRequestException('Email and OTP are required');
        }
        return this.authService.verifyOtp(email, otp);
    }
    async resendOtp(email) {
        return this.authService.resendOtp(email);
    }
    async status(req) {
        const userId = req.user['id'];
        const user = await this.authService.findById(userId);
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return user;
    }
    async updateLocation(req, latitude, longitude, address) {
        const userId = req.user['id'];
        if (!userId) {
            throw new common_1.UnauthorizedException('Invalid token');
        }
        await this.authService.saveLocation(userId, latitude, longitude, address);
        return { message: 'Location updated successfully' };
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('signup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signup_dto_1.SignupDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signup", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, common_1.UseGuards)(local_guard_1.LocalGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.AuthPayloadDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('verify-otp'),
    __param(0, (0, common_1.Body)('email')),
    __param(1, (0, common_1.Body)('otp')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "verifyOtp", null);
__decorate([
    (0, common_1.Post)('resend-otp'),
    __param(0, (0, common_1.Body)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "resendOtp", null);
__decorate([
    (0, common_1.Get)('status'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "status", null);
__decorate([
    (0, common_1.Post)('location'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)('latitude')),
    __param(2, (0, common_1.Body)('longitude')),
    __param(3, (0, common_1.Body)('address')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, Number, String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "updateLocation", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map