import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Question } from './question.entity';

@Entity('forms')
export class Form {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @OneToMany(() => Question, (question) => question.form, {
        cascade: true, // Automatically persist/remove questions when form is saved/removed
    })
    questions: Question[];
}
