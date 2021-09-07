import { IsNotEmpty } from 'class-validator';

export class CreateStoreDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  cnpj: string;

  @IsNotEmpty()
  company: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  state: string;

  @IsNotEmpty()
  city: string;

  active?: boolean;
}
