import { IsNumber, Min } from 'class-validator';

export class CreateBalanceDto {
  @IsNumber()
  was: number;

  @IsNumber()
  @Min(0)
  added: number;
}
