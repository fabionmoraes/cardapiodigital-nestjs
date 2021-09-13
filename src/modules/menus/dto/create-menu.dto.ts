import { IsNotEmpty } from 'class-validator';

export class CreateMenuDto {
  @IsNotEmpty()
  title: string;

  description?: string;

  @IsNotEmpty()
  price: number;

  image?: string;

  @IsNotEmpty()
  storeId: string;

  @IsNotEmpty()
  categoryId: number;
}
