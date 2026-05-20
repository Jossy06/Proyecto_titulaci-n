import { Test, TestingModule } from '@nestjs/testing';
import { ServiceMaterialsService } from './service-materials.service';

describe('ServiceMaterialsService', () => {
  let service: ServiceMaterialsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiceMaterialsService],
    }).compile();

    service = module.get<ServiceMaterialsService>(ServiceMaterialsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
