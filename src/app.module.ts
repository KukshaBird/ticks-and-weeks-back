import { Module } from '@nestjs/common';
import { DishModule } from './dish/dish.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dish } from './dish/entities/dish.entity';

@Module({
  imports: [
    DishModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Dish],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
