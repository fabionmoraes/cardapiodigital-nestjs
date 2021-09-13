import { IsNotEmpty } from 'class-validator';

export class CreateMenuCategoryDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  storeId: string;
}
