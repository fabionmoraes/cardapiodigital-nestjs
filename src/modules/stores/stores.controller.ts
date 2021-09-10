import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';

import { Roles } from 'src/validation/roles.decorator';
import { StoresService } from './stores.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { JwtAuthGuard } from '../auth/shared/jwt-auth.guard';
import { UsersService } from '../users/users.service';

@UseGuards(JwtAuthGuard)
@Controller('stores')
export class StoresController {
  constructor(
    private readonly storesService: StoresService,
    private readonly usersService: UsersService,
  ) {}

  @Post()
  @Roles('admin', 'users')
  async create(@Body() createStoreDto: CreateStoreDto, @Request() request) {
    const { userId } = createStoreDto;

    const user = await this.usersService.findOne(userId || request.user.id);

    return this.storesService.create(createStoreDto, user);
  }

  @Get()
  @Roles('admin')
  findAll() {
    return this.storesService.findAll();
  }

  @Get(':id')
  @Roles('admin', 'users')
  findOne(@Param('id') id: string) {
    return this.storesService.findOne(id);
  }

  @Patch(':id')
  @Roles('admin')
  update(@Param('id') id: string, @Body() updateStoreDto: UpdateStoreDto) {
    return this.storesService.update(id, updateStoreDto);
  }

  @Delete(':id')
  @Roles('admin')
  remove(@Param('id') id: string) {
    return this.storesService.remove(+id);
  }
}
