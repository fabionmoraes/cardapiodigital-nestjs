import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { PubTablesService } from './pub-tables.service';
import { CreatePubTableDto } from './dto/create-pub-table.dto';
import { JwtAuthGuard } from '../auth/shared/jwt-auth.guard';
import { Roles } from 'src/validation/roles.decorator';

@UseGuards(JwtAuthGuard)
@Controller('pub-tables')
export class PubTablesController {
  constructor(private readonly pubTablesService: PubTablesService) {}

  @Post()
  @Roles('users', 'admin')
  create(@Body() createPubTableDto: CreatePubTableDto) {
    return this.pubTablesService.create(createPubTableDto);
  }

  @Get()
  @Roles('users', 'admin')
  findAll() {
    return this.pubTablesService.findAll();
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
