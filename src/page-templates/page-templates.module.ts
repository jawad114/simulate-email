import { Module } from '@nestjs/common';
import { PageTemplateController } from './page-templates.controller';
import { PageTemplateService } from './page-templates.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PageTemplate } from './page-template.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PageTemplate])],
  controllers: [PageTemplateController],
  providers: [PageTemplateService]
})
export class PageTemplatesModule {}
