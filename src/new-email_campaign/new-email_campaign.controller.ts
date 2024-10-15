import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NewEmailCampaignService } from './new-email_campaign.service';
import { CreateNewEmailCampaignDto } from './dto/create-new-email-campaign.dto';
import { UpdateNewEmailCampaignDto } from './dto/update-new-email-campaign.dto';

@Controller('new-email-campaigns')
export class NewEmailCampaignController {
  constructor(private readonly newEmailCampaignService: NewEmailCampaignService) {}

  @Post('create')
  create(@Body() createNewEmailCampaignDto: CreateNewEmailCampaignDto) {
    return this.newEmailCampaignService.create(createNewEmailCampaignDto);
  }

  @Get()
  findAll() {
    return this.newEmailCampaignService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newEmailCampaignService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNewEmailCampaignDto: UpdateNewEmailCampaignDto) {
    return this.newEmailCampaignService.update(+id, updateNewEmailCampaignDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newEmailCampaignService.remove(+id);
  }
}
