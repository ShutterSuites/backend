import { Repository } from 'typeorm';
import { Service } from '../entities/service.entity';
export declare class ServicesService {
    private servicesRepository;
    constructor(servicesRepository: Repository<Service>);
    addService(name: string, price: number): Promise<Service>;
    getAllServices(): Promise<Service[]>;
    getServiceById(id: number): Promise<Service | undefined>;
}
