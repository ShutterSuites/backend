import { Repository } from 'typeorm';
import { Form } from '../entities/form.entity';
import { Question } from '../entities/question.entity';
import { Submission } from '../entities/submission.entity';
export declare class LeadGenerationService {
    private formRepository;
    private questionRepository;
    private submissionRepository;
    constructor(formRepository: Repository<Form>, questionRepository: Repository<Question>, submissionRepository: Repository<Submission>);
    saveFormWithQuestions(formTitle: string, questions: Partial<Question[]>): Promise<Form>;
    getAllForms(): Promise<Form[]>;
    getFormById(id: number): Promise<Form>;
    submitForm(formId: number, answers: any): Promise<Submission>;
}
