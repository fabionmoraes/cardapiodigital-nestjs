import { Customer } from 'src/modules/customers/entities/customer.entity';
import { Store } from 'src/modules/stores/entities/store.entity';
import { Waiter } from 'src/modules/waiters/entities/waiter.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity('pub_tables')
export class PubTable {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  number: number;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @ManyToOne(() => Store, (store) => store.menus)
  store: Store;

  @ManyToOne(() => Waiter, (waiter) => waiter.tables)
  waiter: Waiter;

  @OneToMany(() => Customer, (customer) => customer.pubTable)
  customers: Customer[];

  @DeleteDateColumn({ type: 'timestamp' })
  deleted_at: Date;
}
