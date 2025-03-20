import {
  IsString,
  IsNumber,
  MinLength,
  MaxLength,
  Min,
  Max,
} from 'class-validator';

export class CreateDishDto {
  @IsString()
  @MinLength(3)
  @MaxLength(155)
  name: string;

  @IsNumber()
  @Min(0)
  @Max(1000000)
  price: number;
}
