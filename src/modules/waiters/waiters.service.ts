import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Store } from '../stores/entities/store.entity';
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

  findAll(store: Store): Promise<Waiter[]> {
    return this.waiterRepository.find({
      where: { store },
      relations: ['tables'],
    });
  }

  async findOne(id: string): Promise<Waiter> {
    try {
      const waiters = await this.waiterRepository.findOneOrFail({
        where: { id },
        relations: ['tables'],
      });

      return waiters;
    } catch (err) {
      throw new HttpException(err.message, 400);
    }
  }

  update(id: number, updateWaiterDto: UpdateWaiterDto) {
    return `This action updates a #${id} waiter`;
  }

  remove(id: number) {
    return `This action removes a #${id} waiter`;
  }
}
