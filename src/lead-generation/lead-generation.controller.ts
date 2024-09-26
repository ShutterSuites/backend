import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { LeadGenerationService } from './lead-generation.service';
import { Form } from '../entities/form.entity';

@Controller('lead-generation')
export class LeadGenerationController {
    constructor(private readonly leadGenerationService: LeadGenerationService) {}

    // Save form with questions
    @Post('/save-form')
    async saveForm(@Body() body: { formTitle: string; questions: any[] }) {
        const { formTitle, questions } = body;
        return await this.leadGenerationService.saveFormWithQuestions(formTitle, questions);
    }

    // Add the new GET endpoint to fetch form by ID
    @Get('/form/:id')
    async getFormById(@Param('id') id: number) {
        return await this.leadGenerationService.getFormById(id);
    }

    // Add POST endpoint for form submission
    @Post('/form/:id/submit')
    async submitForm(
        @Param('id') id: number,
        @Body() body: { answers: any }
    ) {
        const { answers } = body;
        return await this.leadGenerationService.submitForm(id, answers);
    }

    // Get all saved forms
    @Get('/forms')
    async getForms(): Promise<Form[]> {
        return await this.leadGenerationService.getAllForms();
    }
}
