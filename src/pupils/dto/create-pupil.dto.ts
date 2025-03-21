import {
  IsBoolean,
  IsOptional,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { CreateBalanceDto } from './create-balance.dto';
import { Type } from 'class-transformer';

export class CreatePupilDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsOptional()
  @IsBoolean()
  benefit: boolean;

  @ValidateNested()
  @Type(() => CreateBalanceDto)
  balance: CreateBalanceDto;
}
