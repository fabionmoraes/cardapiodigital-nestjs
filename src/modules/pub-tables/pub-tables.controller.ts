import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Request,
  UseGuards,
} from '@nestjs/common';
import { PubTablesService } from './pub-tables.service';
import { CreatePubTableDto } from './dto/create-pub-table.dto';
import { JwtAuthGuard } from '../auth/shared/jwt-auth.guard';
import { Roles } from 'src/validation/roles.decorator';
import { StoresService } from '../stores/stores.service';

@UseGuards(JwtAuthGuard)
@Controller('pub-tables')
export class PubTablesController {
  constructor(
    private readonly pubTablesService: PubTablesService,
    private readonly storesService: StoresService,
  ) {}

  @Post()
  @Roles('users', 'admin')
  async create(@Body() createPubTableDto: CreatePubTableDto) {
    const store = await this.storesService.findOne(createPubTableDto.storeId);
    return this.pubTablesService.create(createPubTableDto, store);
  }

  @Get()
  @Roles('users', 'admin')
  findAll(@Request() request) {
    return this.pubTablesService.findAll(request.user);
  }

  @Get(':id')
  @Roles('users', 'admin')
  findOne(@Param('id') id: string) {
    return this.pubTablesService.findOne(id);
  }

  @Delete(':id')
  @Roles('users', 'admin')
  remove(@Param('id') id: string) {
    return this.pubTablesService.remove(id);
  }
}
