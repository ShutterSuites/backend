import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { User } from './entities/user.entity';
import { Form } from "./entities/form.entity";
import  { Question } from './entities/question.entity';

import * as dotenv from 'dotenv';
import { ConfigModule } from "@nestjs/config";
import { LeadGenerationModule } from './lead-generation/lead-generation.module';
import {Submission} from "./entities/submission.entity";
import { ServicesModule } from './services/services.module';
import {Service} from "./entities/service.entity";
import { ClientsModule } from './clients/clients.module';
import {Client} from "./entities/client.entity";
import {Booking} from "./entities/booking.entity";

// Load environment variables from .env file
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [User, Form, Question, Submission, Service, Client, Booking],
      synchronize: true,
      ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false, // Add SSL configuration here
    }),
    AuthModule,
    LeadGenerationModule,
    ServicesModule,
    ClientsModule,
  ],
})
export class AppModule {}
