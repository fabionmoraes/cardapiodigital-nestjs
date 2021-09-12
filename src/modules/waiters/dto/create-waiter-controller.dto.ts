import { IsNotEmpty } from 'class-validator';

export class CreateWaiterControllerDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  key_access: string;

  active?: boolean;

  @IsNotEmpty()
  storeId: string;
}
