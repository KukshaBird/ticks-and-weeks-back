import { Expose, Type } from 'class-transformer';
import { BalanceDto } from './balance.dto';
import { ValidateNested } from 'class-validator';

/**
 * Only for PupilDto.
 */
export class PupilOrderDto {
  @Expose()
  day: string;

  @Expose()
  name: string;
}

export class PupilDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  benefit: boolean;

  @Expose()
  @ValidateNested()
  @Type(() => BalanceDto)
  balance: BalanceDto;

  @Expose()
  @ValidateNested({ each: true })
  @Type(() => PupilOrderDto)
  orders: [];
}
