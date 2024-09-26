import { ServicesService } from './services.service';
import { Service } from '../entities/service.entity';
export declare class ServicesController {
    private readonly servicesService;
    constructor(servicesService: ServicesService);
    addService(name: string, price: number): Promise<Service>;
    getAllServices(): Promise<Service[]>;
    getServiceById(id: number): Promise<Service>;
}
