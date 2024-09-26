import { Form } from './form.entity';
export declare class Question {
    id: number;
    questionText: string;
    questionType: string;
    options: string[];
    form: Form;
}
