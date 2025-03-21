import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './order.entity';
import { PupilsModule } from '../pupils/pupils.module';

@Module({
  imports: [TypeOrmModule.forFeature([Order]), PupilsModule],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
