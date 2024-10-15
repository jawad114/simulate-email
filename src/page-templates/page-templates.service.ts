import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PageTemplate } from './page-template.entity';
import { CreatePageTemplateDto } from './dto/create-page-template.dto';
import { UpdatePageTemplateDto } from './dto/update-page-template.dto';

@Injectable()
export class PageTemplateService {
  constructor(
    @InjectRepository(PageTemplate)
    private pageTemplateRepository: Repository<PageTemplate>,
  ) {}

  async create(createPageTemplateDto: CreatePageTemplateDto): Promise<PageTemplate> {
    const pageTemplate = this.pageTemplateRepository.create(createPageTemplateDto);
    return this.pageTemplateRepository.save(pageTemplate);
  }

  async findAll(): Promise<PageTemplate[]> {
    return this.pageTemplateRepository.find();
  }

  async findOne(id: number): Promise<PageTemplate> {
    const pageTemplate = await this.pageTemplateRepository.findOne({ where: { id } });
    if (!pageTemplate) {
      throw new NotFoundException(`Page template with ID ${id} not found`);
    }
    return pageTemplate;
  }

  async update(id: number, updatePageTemplateDto: UpdatePageTemplateDto): Promise<PageTemplate> {
    const pageTemplate = await this.findOne(id);
    Object.assign(pageTemplate, updatePageTemplateDto);
    return this.pageTemplateRepository.save(pageTemplate);
  }

  async remove(id: number): Promise<void> {
    const result = await this.pageTemplateRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Page template with ID ${id} not found`);
    }
  }
}
