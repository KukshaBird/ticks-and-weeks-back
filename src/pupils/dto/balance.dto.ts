import { Expose } from 'class-transformer';

export class BalanceDto {
  @Expose()
  was: number;

  @Expose()
  added: number;
}
