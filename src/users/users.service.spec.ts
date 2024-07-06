import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './user.entity';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: {
            createUser: jest.fn(),
            updateUserById: jest.fn(),
            deleteUserById: jest.fn(),
            getUserById: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('createUser', () => {
    it('should create a new user', () => {
      const result: User = { id: 1, name: 'John', email: 'john@example.com', phone: '0123456789' };
      jest.spyOn(service, 'createUser').mockImplementation(() => result);

      expect(controller.createUser('John', 'john@example.com', '0123456789')).toBe(result);
    });
  });

  describe('updateUser', () => {
    it('should update an existing user', () => {
      const result: User = { id: 1, name: 'John', email: 'john@example.com', phone: '0123456789' };
      jest.spyOn(service, 'updateUserById').mockImplementation(() => result);

      expect(controller.updateUser('1', 'John', 'john@example.com', '0123456789')).toBe(result);
    });
  });

  describe('deleteUser', () => {
    it('should delete an existing user', () => {
      jest.spyOn(service, 'deleteUserById').mockImplementation(() => undefined);

      expect(controller.deleteUser('1')).toBeUndefined();
    });
  });

  describe('getUserById', () => {
    it('should return a user by id', () => {
      const result: User = { id: 1, name: 'John', email: 'john@example.com', phone: '0123456789' };
      jest.spyOn(service, 'getUserById').mockImplementation(() => result);

      expect(controller.getUserById('1')).toBe(result);
    });
  });
});
