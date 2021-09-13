import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Store } from '../stores/entities/store.entity';
import { User } from '../users/entities/user.entity';
import { MenuCategory } from './entities/menu-category.entity';

interface ICreate {
  name: string;
  store: Store;
}

@Injectable()
export class MenuCategoriesService {
  constructor(
    @InjectRepository(MenuCategory)
    private readonly menuCategoryRepository: Repository<MenuCategory>,
  ) {}

  create(create: ICreate): Promise<MenuCategory> {
    const newMenuCategory = this.menuCategoryRepository.create(create);
    return this.menuCategoryRepository.save(newMenuCategory);
  }

  async findAll(storeId: string, user: User): Promise<MenuCategory[]> {
    if (user.role.slug === 'admin') {
      return await this.menuCategoryRepository.find({
        where: `(storeId like '%${storeId}%')`,
      });
    }

    if (!storeId) {
      throw new HttpException('Ops! Loja não encontrada', 400);
    }

    const verifyIfExistsStoreUser = !!user.stores.find(
      (item) => item.id === storeId,
    );

    if (!verifyIfExistsStoreUser) {
      throw new HttpException('Ops! Loja não encontrada', 400);
    }

    return await this.menuCategoryRepository.find({
      where: `(storeId like '%${storeId}%')`,
    });
  }

  async findOne(id: number): Promise<MenuCategory> {
    try {
      const category = await this.menuCategoryRepository.findOneOrFail(id);
      return category;
    } catch (err) {
      throw new HttpException(err.message, 400);
    }
  }
}
