"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("./auth/auth.module");
const user_entity_1 = require("./entities/user.entity");
const form_entity_1 = require("./entities/form.entity");
const question_entity_1 = require("./entities/question.entity");
const dotenv = require("dotenv");
const lead_generation_module_1 = require("./lead-generation/lead-generation.module");
const submission_entity_1 = require("./entities/submission.entity");
const services_module_1 = require("./services/services.module");
const service_entity_1 = require("./entities/service.entity");
const clients_module_1 = require("./clients/clients.module");
const client_entity_1 = require("./entities/client.entity");
const booking_entity_1 = require("./entities/booking.entity");
dotenv.config();
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.DB_HOST,
                port: parseInt(process.env.DB_PORT, 10),
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_DATABASE,
                entities: [user_entity_1.User, form_entity_1.Form, question_entity_1.Question, submission_entity_1.Submission, service_entity_1.Service, client_entity_1.Client, booking_entity_1.Booking],
                synchronize: true,
            }),
            auth_module_1.AuthModule,
            lead_generation_module_1.LeadGenerationModule,
            services_module_1.ServicesModule,
            clients_module_1.ClientsModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map