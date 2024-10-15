import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PageTemplateService } from './page-templates.service';
import { CreatePageTemplateDto } from './dto/create-page-template.dto';
import { UpdatePageTemplateDto } from './dto/update-page-template.dto';

@Controller('page-templates')
export class PageTemplateController {
  constructor(private readonly pageTemplateService: PageTemplateService) {}

  @Post('create')
  create(@Body() createPageTemplateDto: CreatePageTemplateDto) {
    return this.pageTemplateService.create(createPageTemplateDto);
  }

  @Get()
  findAll() {
    return this.pageTemplateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pageTemplateService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePageTemplateDto: UpdatePageTemplateDto) {
    return this.pageTemplateService.update(+id, updatePageTemplateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pageTemplateService.remove(+id);
  }
}
