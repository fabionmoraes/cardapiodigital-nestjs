import { Module } from '@nestjs/common';
import { PubTablesService } from './pub-tables.service';
import { PubTablesController } from './pub-tables.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PubTable } from './entities/pub-table.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PubTable])],
  controllers: [PubTablesController],
  providers: [PubTablesService],
})
export class PubTablesModule {}
