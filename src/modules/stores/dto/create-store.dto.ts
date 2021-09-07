import { IsNotEmpty } from 'class-validator';

export class CreateStoreDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  cnpj: string;

  @IsNotEmpty()
  company: string;

  company_name?: string;
  zip_code?: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  address_number: number;

  address_complement: string;

  @IsNotEmpty()
  neighborhood: string;

  @IsNotEmpty()
  state: string;

  @IsNotEmpty()
  city: string;

  phone?: string;
  email?: string;
  active?: boolean;
}
