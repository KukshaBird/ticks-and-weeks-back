import { Module } from '@nestjs/common';
import { DishModule } from './dish/dish.module';

@Module({
  imports: [DishModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
