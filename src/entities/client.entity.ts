import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Booking } from './booking.entity';  // Import the Booking entity

@Entity()
export class Client {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    mobile: string;

    @Column()
    bookingVia: string;

    // Define the OneToMany relationship to Booking
    @OneToMany(() => Booking, (booking) => booking.client)
    bookings: Booking[];
}
