import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { Store } from './entities/store.entity';

@Injectable()
export class StoresService {
  constructor(
    @InjectRepository(Store)
    private readonly storeRepository: Repository<Store>,
  ) {}

  async create(createStoreDto: CreateStoreDto): Promise<Store> {
    const newStore = this.storeRepository.create(createStoreDto);

    return await this.storeRepository.save(newStore);
  }

  async findAll(): Promise<Store[]> {
    return await this.storeRepository.find();
  }

  async findOne(id: string): Promise<Store> {
    try {
      const store = await this.storeRepository.findOneOrFail(id);

      return store;
    } catch (err) {
      throw new HttpException(err.message, 400);
    }
  }

  async update(id: string, updateStoreDto: UpdateStoreDto): Promise<Store> {
    return await this.storeRepository.save({ id, ...updateStoreDto });
  }

  remove(id: number) {
    return `This action removes a #${id} store`;
  }
}
