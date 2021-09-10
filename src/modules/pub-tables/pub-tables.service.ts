import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Store } from '../stores/entities/store.entity';
import { User } from '../users/entities/user.entity';
import { CreatePubTableDto } from './dto/create-pub-table.dto';
import { PubTable } from './entities/pub-table.entity';

@Injectable()
export class PubTablesService {
  constructor(
    @InjectRepository(PubTable)
    private readonly pubTableRepository: Repository<PubTable>,
  ) {}

  async create(
    createPubTableDto: CreatePubTableDto,
    store: Store,
  ): Promise<PubTable[]> {
    const newPubTable = [];

    createPubTableDto.numbers.forEach((item) => {
      newPubTable.push(
        this.pubTableRepository.create({
          number: item,
          store,
        }),
      );
    });

    return await this.pubTableRepository.save(newPubTable);
  }

  async findAll(user: User): Promise<PubTable[]> {
    if (user.role.slug === 'admin') {
      return await this.pubTableRepository.find({
        relations: ['waiter', 'store'],
      });
    }

    return await this.pubTableRepository.find({
      where: { store: user.stores[0] },
      relations: ['waiter', 'store'],
    });
  }

  async findOne(id: string): Promise<PubTable> {
    try {
      const pubTable = await this.pubTableRepository.findOneOrFail({
        where: { id },
        relations: ['waiter', 'store'],
      });

      return pubTable;
    } catch (err) {
      throw new HttpException(err.message, 400);
    }
  }

  async remove(id: string) {
    const pubTable = await this.findOne(id);
    return await this.pubTableRepository.remove(pubTable);
  }
}
