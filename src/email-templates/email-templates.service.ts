import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmailTemplate } from './email-template.entity';
import { CreateEmailTemplateDto } from './dto/create-email-template.dto';
import { UpdateEmailTemplateDto } from './dto/update-email-template.dto';

@Injectable()
export class EmailTemplateService {
  constructor(
    @InjectRepository(EmailTemplate)
    private emailTemplateRepository: Repository<EmailTemplate>,
  ) {}

  async create(createEmailTemplateDto: CreateEmailTemplateDto): Promise<EmailTemplate> {
    const emailTemplate = this.emailTemplateRepository.create(createEmailTemplateDto);
    return this.emailTemplateRepository.save(emailTemplate);
  }

  async findAll(): Promise<EmailTemplate[]> {
    return this.emailTemplateRepository.find();
  }

  async findOne(id: number): Promise<EmailTemplate> {
    const emailTemplate = await this.emailTemplateRepository.findOne({ where: { id } });
    if (!emailTemplate) {
      throw new NotFoundException(`Email template with ID ${id} not found`);
    }
    return emailTemplate;
  }

  async update(id: number, updateEmailTemplateDto: UpdateEmailTemplateDto): Promise<EmailTemplate> {
    const emailTemplate = await this.findOne(id);
    Object.assign(emailTemplate, updateEmailTemplateDto);
    return this.emailTemplateRepository.save(emailTemplate);
  }

  async remove(id: number): Promise<void> {
    const result = await this.emailTemplateRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Email template with ID ${id} not found`);
    }
  }
}
