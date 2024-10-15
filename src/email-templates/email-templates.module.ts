import { Module } from '@nestjs/common';
import { EmailTemplateController } from './email-templates.controller';
import { EmailTemplateService } from './email-templates.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmailTemplate } from './email-template.entity';


@Module({
  imports: [TypeOrmModule.forFeature([EmailTemplate])],
  exports: [EmailTemplateService],  // make service available for other modules
  controllers: [EmailTemplateController],
  providers: [EmailTemplateService]
})
export class EmailTemplatesModule {}
