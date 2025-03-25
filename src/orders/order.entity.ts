import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Pupil } from '../pupils/entities/pupil.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  day: string;

  @Column()
  name: string;

  @ManyToOne(() => Pupil, (pupil: Pupil) => pupil.orders, {
    onDelete: 'CASCADE',
    orphanedRowAction: 'delete',
  })
  pupil: Pupil;
}
