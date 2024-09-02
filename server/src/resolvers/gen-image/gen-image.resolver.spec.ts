import { Test, TestingModule } from '@nestjs/testing';
import { GenImageResolver } from './gen-image.resolver';

describe('GenImageResolver', () => {
  let resolver: GenImageResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenImageResolver],
    }).compile();

    resolver = module.get<GenImageResolver>(GenImageResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
