import { Booking } from './booking.entity';
export declare class Client {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    bookingVia: string;
    bookings: Booking[];
}
