import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { WaitersService } from './waiters.service';
import { CreateWaiterControllerDto } from './dto/create-waiter-controller.dto';
import { UpdateWaiterDto } from './dto/update-waiter.dto';
import { JwtAuthGuard } from '../auth/shared/jwt-auth.guard';
import { Roles } from 'src/validation/roles.decorator';
import { StoresService } from '../stores/stores.service';

@UseGuards(JwtAuthGuard)
@Controller('waiters')
export class WaitersController {
  constructor(
    private readonly waitersService: WaitersService,
    private readonly storesService: StoresService,
  ) {}

  @Post()
  @Roles('admin', 'users')
  async create(@Body() createWaiterDto: CreateWaiterControllerDto) {
    const { storeId } = createWaiterDto;
    const store = await this.storesService.findOne(storeId);
    return this.waitersService.create({ ...createWaiterDto, store });
  }

  @Get()
  @Roles('admin', 'users')
  async findAll(@Query() query) {
    const store = await this.storesService.findOne(query.store);
    return this.waitersService.findAll(store);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.waitersService.findOne(id);
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
