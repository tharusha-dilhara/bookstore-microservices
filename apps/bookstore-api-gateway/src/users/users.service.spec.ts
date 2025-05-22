import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { ClientProxy } from '@nestjs/microservices';

describe('UsersService', () => {
  let service: UsersService;
  
  const mockClientProxy = {
    send: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: 'USERS_CLIENT',
          useValue: mockClientProxy,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
