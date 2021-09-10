import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from '../roles/entities/role.entity';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto, role: Role) {
    const newUser = this.userRepository.create({ ...createUserDto, role });
    const user = await this.userRepository.save(newUser);
    delete user.password;
    return user;
  }

  async getByEmail(email: string) {
    return await this.userRepository.findOne({
      where: { email },
      relations: ['role'],
    });
  }

  findAll() {
    return this.userRepository.find({ relations: ['stores'] });
  }

  async findOne(id: string): Promise<User> {
    try {
      const user = await this.userRepository.findOneOrFail({
        where: { id },
        relations: ['stores', 'role'],
      });

      delete user.password;
      return user;
    } catch (err) {
      throw new HttpException(err.message, 400);
    }
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
