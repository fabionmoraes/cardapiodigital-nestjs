import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWaiterDto } from './dto/create-waiter.dto';
import { UpdateWaiterDto } from './dto/update-waiter.dto';
import { Waiter } from './entities/waiter.entity';

@Injectable()
export class WaitersService {
  constructor(
    @InjectRepository(Waiter)
    private readonly waiterRepository: Repository<Waiter>,
  ) {}

  async create(createWaiterDto: CreateWaiterDto): Promise<Waiter> {
    const newWaiter = this.waiterRepository.create(createWaiterDto);

    return await this.waiterRepository.save(newWaiter);
  }

  findAll(): Promise<Waiter[]> {
    return this.waiterRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} waiter`;
  }

  update(id: number, updateWaiterDto: UpdateWaiterDto) {
    return `This action updates a #${id} waiter`;
  }

  remove(id: number) {
    return `This action removes a #${id} waiter`;
  }
}
