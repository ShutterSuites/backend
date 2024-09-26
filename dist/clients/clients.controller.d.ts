import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
export declare class ClientsController {
    private readonly clientsService;
    constructor(clientsService: ClientsService);
    create(createClientDto: CreateClientDto): Promise<import("../entities/client.entity").Client>;
    findAll(): Promise<import("../entities/client.entity").Client[]>;
}
