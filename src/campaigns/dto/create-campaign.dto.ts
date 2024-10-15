import { IsNotEmpty, IsString, IsNumber, IsDate, IsIn } from 'class-validator';

export class CreateCampaignDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  targetSent: string;

  @IsNotEmpty()
  @IsDate()
  dateSent: Date;

  @IsNotEmpty()
  @IsString()
  @IsIn(['yes', 'no'])
  delivered: string;

  @IsNotEmpty()
  @IsNumber()
  opens: number;

  @IsNotEmpty()
  @IsNumber()
  clicks: number;
}
