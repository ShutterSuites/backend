import { Client } from './client.entity';
export declare class Booking {
    id: number;
    bookingDate: string;
    startTime: string;
    endTime: string;
    description: string;
    price: string;
    currency: string;
    client: Client;
}
