import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Form } from './form.entity';

@Entity('questions')
export class Question {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    questionText: string;

    @Column()
    questionType: string;

    @Column('json', { nullable: true })
    options: string[]; // Save options as a JSON array for flexibility

    @ManyToOne(() => Form, (form) => form.questions, { onDelete: 'CASCADE' }) // Cascade delete to remove questions if the form is deleted
    form: Form;
}
