import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Form } from '../entities/form.entity';
import { Question } from '../entities/question.entity';
import { Submission } from '../entities/submission.entity'; // Import Submission entity

@Injectable()
export class LeadGenerationService {
    constructor(
        @InjectRepository(Form) private formRepository: Repository<Form>,
        @InjectRepository(Question) private questionRepository: Repository<Question>,
        @InjectRepository(Submission) private submissionRepository: Repository<Submission>, // Inject the repository for submissions
    ) {}

    // Save form with questions
    async saveFormWithQuestions(formTitle: string, questions: Partial<Question[]>): Promise<Form> {
        const form = this.formRepository.create({ title: formTitle, questions });
        return await this.formRepository.save(form); // This will also save the associated questions due to the cascade
    }

    // Get all forms
    async getAllForms(): Promise<Form[]> {
        return await this.formRepository.find();
    }

    // Get form by ID, including questions
    async getFormById(id: number): Promise<Form> {
        return await this.formRepository.findOne({
            where: { id },
            relations: ['questions'], // Include questions in the query
        });
    }

    // Submit form answers
    async submitForm(formId: number, answers: any): Promise<Submission> {
        const form = await this.formRepository.findOne({ where: { id: formId } });
        if (!form) throw new Error('Form not found');

        // Create a new submission
        const submission = new Submission();
        submission.form = form;
        submission.answers = answers; // Save answers as JSON

        return await this.submissionRepository.save(submission); // Save submission to the database
    }
}
