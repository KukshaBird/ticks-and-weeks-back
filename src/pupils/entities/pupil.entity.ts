import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Balance } from './balance.entity';
import { Order } from '../../orders/order.entity';

@Entity()
export class Pupil {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ default: false })
  benefit: boolean;

  @Column({ type: 'text', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @OneToOne(() => Balance, { onDelete: 'CASCADE', cascade: true, eager: true })
  @JoinColumn({ name: 'balance' })
  balance: Balance;

  @OneToMany(() => Order, (order: Order) => order.pupil)
  orders: Order[];
}
