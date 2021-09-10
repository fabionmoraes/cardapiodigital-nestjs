import { IsNotEmpty } from 'class-validator';

export class CreatePubTableDto {
  @IsNotEmpty()
  numbers: number[];

  @IsNotEmpty()
  storeId: string;
}
