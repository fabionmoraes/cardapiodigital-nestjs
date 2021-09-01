import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
} from 'typeorm';

import { PubTable } from 'src/modules/pub-tables/entities/pub-table.entity';
import { Store } from 'src/modules/stores/entities/store.entity';

@Entity('customers')
export class Customer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => PubTable, (publeTable) => publeTable.customers)
  pubTable: PubTable;

  @ManyToOne(() => Store, (store) => store.customers)
  store: Store;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deleted_at: Date;
}
