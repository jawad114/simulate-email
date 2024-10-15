import { Module } from '@nestjs/common';
import { CampaignsController } from './campaigns.controller';
import { CampaignService } from './campaigns.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Campaign } from './campaign.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Campaign])],
  controllers: [CampaignsController],
  providers: [CampaignService]
})
export class CampaignsModule {}
