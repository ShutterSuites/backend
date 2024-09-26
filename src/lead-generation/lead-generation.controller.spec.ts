import { Test, TestingModule } from '@nestjs/testing';
import { LeadGenerationController } from './lead-generation.controller';

describe('LeadGenerationController', () => {
  let controller: LeadGenerationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LeadGenerationController],
    }).compile();

    controller = module.get<LeadGenerationController>(LeadGenerationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
