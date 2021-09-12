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

import { Menu } from 'src/modules/menus/entities/menu.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { PubTable } from 'src/modules/pub-tables/entities/pub-table.entity';
import { Customer } from 'src/modules/customers/entities/customer.entity';
import { Waiter } from 'src/modules/waiters/entities/waiter.entity';
import { MenuCategory } from 'src/modules/menus/entities/menu-category.entity';

@Entity('stores')
export class Store {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false, unique: true })
  cnpj: string;

  @Column({ nullable: false })
  company: string;

  @Column({ nullable: true })
  company_name: string;

  @Column({ nullable: true })
  zip_code: string;

  @Column({ nullable: false })
  address: string;

  @Column()
  address_number: number;

  @Column()
  address_complement: string;

  @Column()
  neighborhood: string;

  @Column({ nullable: false })
  state: string;

  @Column({ nullable: false })
  city: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  email: string;

  @Column({ default: true })
  active: boolean;

  @ManyToOne(() => User, (user) => user.stores)
  user: User;

  @OneToMany(() => Menu, (menu) => menu.store)
  menus: Menu[];

  @OneToMany(() => PubTable, (pubTable) => pubTable.store)
  pubTables: PubTable[];

  @OneToMany(() => Customer, (customer) => customer.store)
  customers: Customer[];

  @OneToMany(() => Waiter, (waiter) => waiter.store)
  waiters: Waiter[];

  @OneToMany(() => MenuCategory, (menuCategory) => menuCategory.store)
  category: MenuCategory;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deleted_at: Date;
}
