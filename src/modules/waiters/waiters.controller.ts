import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { WaitersService } from './waiters.service';
import { CreateWaiterDto } from './dto/create-waiter.dto';
import { UpdateWaiterDto } from './dto/update-waiter.dto';
import { JwtAuthGuard } from '../auth/shared/jwt-auth.guard';
import { Roles } from 'src/validation/roles.decorator';

@UseGuards(JwtAuthGuard)
@Controller('waiters')
export class WaitersController {
  constructor(private readonly waitersService: WaitersService) {}

  @Post()
  @Roles('admin', 'users')
  create(@Body() createWaiterDto: CreateWaiterDto) {
    return this.waitersService.create(createWaiterDto);
  }

  @Get()
  @Roles('admin', 'users')
  findAll() {
    return this.waitersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.waitersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWaiterDto: UpdateWaiterDto) {
    return this.waitersService.update(+id, updateWaiterDto);
  }

  @Delete(':id')
  @Roles('admin', 'users')
  remove(@Param('id') id: string) {
    return this.waitersService.remove(+id);
  }
}
