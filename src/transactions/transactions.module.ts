import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  exports: [TransactionsService],
  controllers: [TransactionsController],
  providers: [TransactionsService],
})
export class TransactionsModule {}
