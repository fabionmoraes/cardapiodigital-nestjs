import {
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Entity,
  UpdateDateColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { Store } from 'src/modules/stores/entities/store.entity';
import { Menu } from './menu.entity';

@Entity('menu-categories')
export class MenuCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Store, (store) => store.category)
  store: Store;

  @OneToMany(() => Menu, (menu) => menu.category)
  menus: Menu[];

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
