import { Module } from '@nestjs/common';
import { PupilsService } from './pupils.service';
import { PupilsController } from './pupils.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pupil } from './entities/pupil.entity';
import { Balance } from './entities/balance.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pupil, Balance])],
  exports: [PupilsService],
  controllers: [PupilsController],
  providers: [PupilsService],
})
export class PupilsModule {}
