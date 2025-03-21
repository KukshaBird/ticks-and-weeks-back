import { IsString } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  day: string;

  @IsString()
  name: string;
}
