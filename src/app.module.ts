import { Module } from '@nestjs/common';

import { XlsModule } from './xls/xls.module';

import { ConfigModule } from '@nestjs/config';
//import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [XlsModule, ConfigModule.forRoot()],
})
export class AppModule {}

