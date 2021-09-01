import { Injectable } from '@nestjs/common';
import { CreatePubTableDto } from './dto/create-pub-table.dto';
import { UpdatePubTableDto } from './dto/update-pub-table.dto';

@Injectable()
export class PubTablesService {
  create(createPubTableDto: CreatePubTableDto) {
    return 'This action adds a new pubTable';
  }

  findAll() {
    return `This action returns all pubTables`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pubTable`;
  }

  update(id: number, updatePubTableDto: UpdatePubTableDto) {
    return `This action updates a #${id} pubTable`;
  }

  remove(id: number) {
    return `This action removes a #${id} pubTable`;
  }
}
