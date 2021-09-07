import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePubTableDto } from './dto/create-pub-table.dto';
import { PubTable } from './entities/pub-table.entity';

@Injectable()
export class PubTablesService {
  constructor(
    @InjectRepository(PubTable)
    private readonly pubTableRepository: Repository<PubTable>,
  ) {}

  async create(createPubTableDto: CreatePubTableDto): Promise<PubTable> {
    const newPubTable = this.pubTableRepository.create(createPubTableDto);

    return await this.pubTableRepository.save(newPubTable);
  }

  async findAll(): Promise<PubTable[]> {
    return await this.pubTableRepository.find();
  }

  async findOne(id: string): Promise<PubTable> {
    try {
      const pubTable = await this.pubTableRepository.findOneOrFail(id);

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
