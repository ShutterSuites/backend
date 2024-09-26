import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Form } from './form.entity';

@Entity('submissions')
export class Submission {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Form)
    form: Form;

    @Column('json')
    answers: any; // Store answers as a JSON object
}
