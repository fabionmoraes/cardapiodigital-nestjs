import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MenusService } from './menus.service';
import { MenusController } from './menus.controller';
import { Menu } from './entities/menu.entity';
import { MenuCategory } from './entities/menu-category.entity';
import { MenuCategoriesService } from './menu-categories.service';
import { MenuCategoriesController } from './menu-categories.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Menu, MenuCategory])],
  controllers: [MenusController, MenuCategoriesController],
  providers: [MenusService, MenuCategoriesService],
  exports: [MenusService, MenuCategoriesService],
})
export class MenusModule {}
