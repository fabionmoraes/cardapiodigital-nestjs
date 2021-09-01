import { Module } from '@nestjs/common';
import { PubTablesService } from './pub-tables.service';
import { PubTablesController } from './pub-tables.controller';

@Module({
  controllers: [PubTablesController],
  providers: [PubTablesService]
})
export class PubTablesModule {}
