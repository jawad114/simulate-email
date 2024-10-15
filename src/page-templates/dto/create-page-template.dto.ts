import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePageTemplateDto {
  @IsNotEmpty()
  @IsString()
  subject: string;

  @IsNotEmpty()
  @IsString()
  message: string;
}
