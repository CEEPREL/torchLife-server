import { Test, TestingModule } from '@nestjs/testing';
import { WaitlistResolver } from './waitlist.resolver';
import { WaitlistService } from './waitlist.service';

describe('WaitlistResolver', () => {
  let resolver: WaitlistResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WaitlistResolver, WaitlistService],
    }).compile();

    resolver = module.get<WaitlistResolver>(WaitlistResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
