import { LeadGenerationService } from './lead-generation.service';
import { Form } from '../entities/form.entity';
export declare class LeadGenerationController {
    private readonly leadGenerationService;
    constructor(leadGenerationService: LeadGenerationService);
    saveForm(body: {
        formTitle: string;
        questions: any[];
    }): Promise<Form>;
    getFormById(id: number): Promise<Form>;
    submitForm(id: number, body: {
        answers: any;
    }): Promise<import("../entities/submission.entity").Submission>;
    getForms(): Promise<Form[]>;
}
