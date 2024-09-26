import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Form } from '../entities/form.entity'
import { Question } from '../entities/question.entity';
import { LeadGenerationController } from './lead-generation.controller';
import { LeadGenerationService } from './lead-generation.service';
import {Submission} from "../entities/submission.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Form, Question, Submission])],
  controllers: [LeadGenerationController],
  providers: [LeadGenerationService],
})
export class LeadGenerationModule {}
