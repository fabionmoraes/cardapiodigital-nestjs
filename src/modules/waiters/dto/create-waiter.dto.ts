import { Store } from 'src/modules/stores/entities/store.entity';

export class CreateWaiterDto {
  name: string;
  key_access: string;
  active?: boolean;
  store: Store;
}
