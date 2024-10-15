import { IsNotEmpty, IsString, IsNumber, IsArray } from 'class-validator';

export class CreateNewEmailCampaignDto {
  @IsNotEmpty()
  @IsString()
  emailName: string;

  @IsNotEmpty()
  @IsNumber()
  targetEmailId: number; // Reference to Target entity

  @IsNotEmpty()
  @IsNumber()
  emailTemplateId: number; // Reference to EmailTemplate entity

  @IsNotEmpty()
  @IsNumber()
  pageTemplateId: number; // Reference to PageTemplate entity

  @IsNotEmpty()
  @IsArray()
  followUpEmailOptions: string[]; // Array of selected follow-up email options

  @IsNotEmpty()
  @IsString()
  timeZone: string; // Time zone

  @IsNotEmpty()
  startDate: Date; // Start date

  @IsNotEmpty()
  startTime: string; // Start time
}
