import { Module } from '@nestjs/common';
import { DishModule } from './dish/dish.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dish } from './dish/entities/dish.entity';
import { PupilsModule } from './pupils/pupils.module';
import { Pupil } from './pupils/entities/pupil.entity';
import { Balance } from './pupils/entities/balance.entity';
import { Order } from './orders/order.entity';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    DishModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Dish, Pupil, Balance, Order],
      synchronize: true,
    }),
    PupilsModule,
    OrdersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
