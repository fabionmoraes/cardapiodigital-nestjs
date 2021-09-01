import { PartialType } from '@nestjs/mapped-types';
import { CreatePubTableDto } from './create-pub-table.dto';

export class UpdatePubTableDto extends PartialType(CreatePubTableDto) {}
