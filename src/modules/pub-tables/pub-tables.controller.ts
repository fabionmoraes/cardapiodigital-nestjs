import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PubTablesService } from './pub-tables.service';
import { CreatePubTableDto } from './dto/create-pub-table.dto';
import { UpdatePubTableDto } from './dto/update-pub-table.dto';

@Controller('pub-tables')
export class PubTablesController {
  constructor(private readonly pubTablesService: PubTablesService) {}

  @Post()
  create(@Body() createPubTableDto: CreatePubTableDto) {
    return this.pubTablesService.create(createPubTableDto);
  }

  @Get()
  findAll() {
    return this.pubTablesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pubTablesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePubTableDto: UpdatePubTableDto) {
    return this.pubTablesService.update(+id, updatePubTableDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pubTablesService.remove(+id);
  }
}
