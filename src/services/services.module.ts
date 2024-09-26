import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicesService } from './services.service';  // Service class
import { ServicesController } from './services.controller'; // Controller class
import { Service } from '../entities/service.entity'; // The Service entity

@Module({
  imports: [
    TypeOrmModule.forFeature([Service]), // Importing the Service entity
  ],
  controllers: [ServicesController],     // Registering the ServicesController
  providers: [ServicesService],          // Registering the ServicesService
  exports: [ServicesService],            // Optionally export the ServicesService to be used elsewhere
})
export class ServicesModule {}
