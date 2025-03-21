import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Balance {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  was: number;

  @Column()
  added: number;
}
