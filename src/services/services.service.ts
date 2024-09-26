import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service } from '../entities/service.entity';

@Injectable()
export class ServicesService {
    constructor(
        @InjectRepository(Service)
        private servicesRepository: Repository<Service>,
    ) {}

    // Add a new service
    async addService(name: string, price: number): Promise<Service> {
        const service = this.servicesRepository.create({ name, price });
        return await this.servicesRepository.save(service);
    }

    // Get all services
    async getAllServices(): Promise<Service[]> {
        return await this.servicesRepository.find();
    }

// Get service by ID
    async getServiceById(id: number): Promise<Service | undefined> {
        return this.servicesRepository.findOne({ where: { id } });
    }
}
