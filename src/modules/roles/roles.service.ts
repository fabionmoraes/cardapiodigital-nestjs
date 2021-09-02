import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role) private roleRepository: Repository<Role>,
  ) {}

  async create(createRoleDto: CreateRoleDto) {
    const newRole = this.roleRepository.create(createRoleDto);
    const role = await this.roleRepository.save(newRole);

    return role;
  }

  async findAll() {
    const roles = await this.roleRepository.find();
    return roles;
  }

  async findOne(id: string): Promise<Role> {
    try {
      const role = await this.roleRepository.findOneOrFail(id);
      return role;
    } catch (err) {
      throw new HttpException(err.message, 400);
    }
  }

  update(id: string, updateRoleDto: UpdateRoleDto) {
    return this.roleRepository.save({
      id,
      ...updateRoleDto,
    });
  }

  async remove(id: string) {
    const role = await this.roleRepository.findOne(id);
    return await this.roleRepository.remove(role);
  }
}
