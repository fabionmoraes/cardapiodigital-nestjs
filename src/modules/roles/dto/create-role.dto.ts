import { IsNotEmpty } from 'class-validator';

export class CreateRoleDto {
  @IsNotEmpty({ message: 'Por favor! Preencha o campo name.' })
  name: string;

  @IsNotEmpty()
  slug: string;
}
