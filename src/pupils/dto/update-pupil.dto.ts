import { PartialType } from '@nestjs/mapped-types';
import { CreatePupilDto } from './create-pupil.dto';
import { IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdatePupilOrdersDto {
  @IsString()
  day: string;

  @IsString()
  name: string;
}
export class UpdatePupilDto extends PartialType(CreatePupilDto) {
  @ValidateNested()
  @Type(() => UpdatePupilOrdersDto)
  orders: UpdatePupilOrdersDto[];
}
