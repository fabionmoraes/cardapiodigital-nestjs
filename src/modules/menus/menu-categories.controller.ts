import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/shared/jwt-auth.guard';
import { MenuCategoriesService } from './menu-categories.service';

@UseGuards(JwtAuthGuard)
@Controller('menu-categories')
export class MenuCategoriesController {
  constructor(private readonly menuCategoriesService: MenuCategoriesService) {}

  @Get()
  findAll() {
    return this.menuCategoriesService.findAll();
  }
}
