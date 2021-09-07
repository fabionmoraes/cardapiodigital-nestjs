import { IsNotEmpty } from 'class-validator';

export class CreatePubTableDto {
  @IsNotEmpty()
  number: number;

  @IsNotEmpty()
  storeId: string;
}
