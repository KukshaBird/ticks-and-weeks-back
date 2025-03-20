import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Dish {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  price: number;
}
