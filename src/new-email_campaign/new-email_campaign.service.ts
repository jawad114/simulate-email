import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewEmailCampaign } from './new-email-campaign.entity';
import { CreateNewEmailCampaignDto } from './dto/create-new-email-campaign.dto';
import { UpdateNewEmailCampaignDto } from './dto/update-new-email-campaign.dto';

@Injectable()
export class NewEmailCampaignService {
  constructor(
    @InjectRepository(NewEmailCampaign)
    private newEmailCampaignRepository: Repository<NewEmailCampaign>,
  ) {}

  async create(createNewEmailCampaignDto: CreateNewEmailCampaignDto): Promise<NewEmailCampaign> {
    const { startDate, ...otherData } = createNewEmailCampaignDto;
    const validDate = new Date(startDate);
    console.log(startDate, validDate)
    if (isNaN(validDate.getTime())) {
        throw new Error('Invalid start date');
    }
    const newEmailCampaign = this.newEmailCampaignRepository.create(createNewEmailCampaignDto);
    return this.newEmailCampaignRepository.save(newEmailCampaign);
  }

  async findAll(): Promise<NewEmailCampaign[]> {
    return this.newEmailCampaignRepository.find();
  }

  async findOne(id: number): Promise<NewEmailCampaign> {
    const campaign = await this.newEmailCampaignRepository.findOne({ where: { id } });
    if (!campaign) {
      throw new NotFoundException(`Campaign with ID ${id} not found`);
    }
    return campaign;
  }

  async update(id: number, updateNewEmailCampaignDto: UpdateNewEmailCampaignDto): Promise<NewEmailCampaign> {
    const campaign = await this.findOne(id);
    Object.assign(campaign, updateNewEmailCampaignDto);
    return this.newEmailCampaignRepository.save(campaign);
  }

  async remove(id: number): Promise<void> {
    const result = await this.newEmailCampaignRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Campaign with ID ${id} not found`);
    }
  }
}
