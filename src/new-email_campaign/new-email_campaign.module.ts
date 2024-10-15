import { Module } from '@nestjs/common';
import { NewEmailCampaignController } from './new-email_campaign.controller';
import { NewEmailCampaignService } from './new-email_campaign.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewEmailCampaign } from './new-email-campaign.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NewEmailCampaign])],
  controllers: [NewEmailCampaignController],
  providers: [NewEmailCampaignService]
})
export class NewEmailCampaignModule {}
