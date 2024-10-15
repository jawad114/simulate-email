import { PartialType } from '@nestjs/mapped-types';
import { CreateNewEmailCampaignDto } from './create-new-email-campaign.dto';

export class UpdateNewEmailCampaignDto extends PartialType(CreateNewEmailCampaignDto) {}
