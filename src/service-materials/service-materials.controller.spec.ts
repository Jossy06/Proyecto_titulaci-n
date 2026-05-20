import { Test, TestingModule } from '@nestjs/testing';
import { ServiceMaterialsController } from './service-materials.controller';

describe('ServiceMaterialsController', () => {
  let controller: ServiceMaterialsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServiceMaterialsController],
    }).compile();

    controller = module.get<ServiceMaterialsController>(ServiceMaterialsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
