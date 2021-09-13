import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { Roles } from 'src/validation/roles.decorator';
import { JwtAuthGuard } from '../auth/shared/jwt-auth.guard';
import { StoresService } from '../stores/stores.service';
import { CreateMenuCategoryDto } from './dto/create-menu-category.dto';
import { MenuCategoriesService } from './menu-categories.service';

@UseGuards(JwtAuthGuard)
@Controller('menu-categories')
export class MenuCategoriesController {
  constructor(
    private readonly menuCategoriesService: MenuCategoriesService,
    private readonly storesService: StoresService,
  ) {}

  @Post()
  @Roles('admin', 'users')
  async create(@Body() createMenuCategoryDto: CreateMenuCategoryDto) {
    const store = await this.storesService.findOne(
      createMenuCategoryDto.storeId,
    );
    return this.menuCategoriesService.create({
      ...createMenuCategoryDto,
      store,
    });
  }

  @Get()
  findAll(@Request() request) {
    const { user, query }: any = request;
    return this.menuCategoriesService.findAll(query.store, user);
  }
}
