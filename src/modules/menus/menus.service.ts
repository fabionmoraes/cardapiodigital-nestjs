import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { Menu } from './entities/menu.entity';

@Injectable()
export class MenusService {
  constructor(
    @InjectRepository(Menu) private readonly menuRepository: Repository<Menu>,
  ) {}

  async create(createMenuDto: CreateMenuDto): Promise<Menu> {
    const newMenu = this.menuRepository.create(createMenuDto);

    return await this.menuRepository.save(newMenu);
  }

  async findAll(): Promise<Menu[]> {
    return await this.menuRepository.find();
  }

  async findOne(id: string): Promise<Menu> {
    try {
      const menu = await this.menuRepository.findOneOrFail(id);

      return menu;
    } catch (err) {
      throw new HttpException(err.message, 400);
    }
  }

  async update(id: string, updateMenuDto: UpdateMenuDto): Promise<Menu> {
    return await this.menuRepository.save({ id, ...updateMenuDto });
  }

  async remove(id: string): Promise<Menu> {
    const menu = await this.findOne(id);

    return await this.menuRepository.remove(menu);
  }
}
