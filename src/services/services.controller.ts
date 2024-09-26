import {Controller, Get, Post, Body, NotFoundException, Param} from '@nestjs/common';
import { ServicesService } from './services.service';
import { Service } from '../entities/service.entity';

@Controller('services')
export class ServicesController {
    constructor(private readonly servicesService: ServicesService) {}

    // Add a new service
    @Post('add')
    async addService(
        @Body('name') name: string,
        @Body('price') price: number,
    ): Promise<Service> {
        return this.servicesService.addService(name, price);
    }

    // Get all services
    @Get()
    async getAllServices(): Promise<Service[]> {
        return this.servicesService.getAllServices();
    }
    // Get a single service by ID
    @Get(':id')
    async getServiceById(@Param('id') id: number): Promise<Service> {
        const service = await this.servicesService.getServiceById(id);

        if (!service) {
            throw new NotFoundException(`Service with ID ${id} not found`);
        }

        return service;
    }
}
