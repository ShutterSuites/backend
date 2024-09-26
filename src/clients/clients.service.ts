import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from '../entities/client.entity';
import { CreateClientDto } from './dto/create-client.dto';

@Injectable()
export class ClientsService {
    constructor(
        @InjectRepository(Client)
        private readonly clientsRepository: Repository<Client>,
    ) {}

    async create(createClientDto: CreateClientDto): Promise<Client> {
        // Create a new client entity from the DTO
        const client = this.clientsRepository.create(createClientDto);
        // Save the client entity to the database
        return this.clientsRepository.save(client);
    }

    async findAll(): Promise<Client[]> {
        // Fetch all clients from the database
        return this.clientsRepository.find();
    }

    // Add more methods for fetching, updating, etc., as needed
}
