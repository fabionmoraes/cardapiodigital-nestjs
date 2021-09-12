import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { WaitersService } from './waiters.service';
import { WaitersController } from './waiters.controller';
import { Waiter } from './entities/waiter.entity';
import { StoresModule } from '../stores/stores.module';

@Module({
  imports: [TypeOrmModule.forFeature([Waiter]), StoresModule],
  controllers: [WaitersController],
  providers: [WaitersService],
  exports: [WaitersService],
})
export class WaitersModule {}
