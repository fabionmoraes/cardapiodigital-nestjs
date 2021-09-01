import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { WaitersService } from './waiters.service';
import { WaitersController } from './waiters.controller';
import { Waiter } from './entities/waiter.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Waiter])],
  controllers: [WaitersController],
  providers: [WaitersService],
  exports: [WaitersService],
})
export class WaitersModule {}
