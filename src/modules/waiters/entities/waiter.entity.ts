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

import { Store } from 'src/modules/stores/entities/store.entity';
import { PubTable } from 'src/modules/pub-tables/entities/pub-table.entity';

@Entity('waiters')
export class Waiter {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column()
  key_access: string;

  @Column({ default: true })
  active: boolean;

  @ManyToOne(() => Store, (store) => store.waiters)
  store: Store;

  @OneToMany(() => PubTable, (pubTable) => pubTable.waiter)
  tables: PubTable[];

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deleted_at: Date;
}
