import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../ormconfig';

import { RolesGuard } from './validation/roles.guard';

import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { RolesModule } from './modules/roles/roles.module';
import { StoresModule } from './modules/stores/stores.module';
import { MenusModule } from './modules/menus/menus.module';
import { PubTablesModule } from './modules/pub-tables/pub-tables.module';
import { CustomersModule } from './modules/customers/customers.module';
import { WaitersModule } from './modules/waiters/waiters.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    UsersModule,
    RolesModule,
    AuthModule,
    StoresModule,
    MenusModule,
    PubTablesModule,
    CustomersModule,
    WaitersModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
