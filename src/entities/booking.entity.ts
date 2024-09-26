import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Client } from './client.entity';  // Import the Client entity

@Entity()
export class Booking {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    bookingDate: string;

    @Column()
    startTime: string;

    @Column()
    endTime: string;

    @Column()
    description: string;

    @Column()
    price: string;

    @Column()
    currency: string;

    // Define the ManyToOne relationship to Client
    @ManyToOne(() => Client, (client) => client.bookings)
    client: Client;
}
