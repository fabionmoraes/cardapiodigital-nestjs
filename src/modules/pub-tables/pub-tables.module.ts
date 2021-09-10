import { Module } from '@nestjs/common';
import { PubTablesService } from './pub-tables.service';
import { PubTablesController } from './pub-tables.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PubTable } from './entities/pub-table.entity';
import { StoresModule } from '../stores/stores.module';

@Module({
  imports: [TypeOrmModule.forFeature([PubTable]), StoresModule],
  controllers: [PubTablesController],
  providers: [PubTablesService],
})
export class PubTablesModule {}
