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
      type: 'postgres',
      host: 'postgres-dev',
      database: process.env.DATABASE_NAME || '',
      username: process.env.DATABASE_USER || '',
      password: process.env.DATABASE_PASSWORD || '',
      port: 5432,
      synchronize: true,
      entities: [Dish, Pupil, Balance, Order],
    }),
    PupilsModule,
    OrdersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
