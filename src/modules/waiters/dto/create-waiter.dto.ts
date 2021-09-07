import { IsNotEmpty } from 'class-validator';

export class CreateWaiterDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  key_access: string;

  active?: boolean;

  @IsNotEmpty()
  storeId: number;
}
