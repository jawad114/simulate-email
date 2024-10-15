import { PartialType } from '@nestjs/mapped-types';
import { CreateTargetDto } from './target.dto';

export class UpdateTargetDto extends PartialType(CreateTargetDto) {}
