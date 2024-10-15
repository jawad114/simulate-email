// src/config/typeorm.config.ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from 'src/user/user.entity';
import { Target } from 'src/targets/target.entity';
import { EmailTemplate } from 'src/email-templates/email-template.entity';
import { PageTemplate } from 'src/page-templates/page-template.entity';
import { Campaign } from 'src/campaigns/campaign.entity';
import { NewEmailCampaign } from 'src/new-email_campaign/new-email-campaign.entity';

export const typeOrmConfig = async (
    
  configService: ConfigService,
): Promise<TypeOrmModuleOptions> => ({
  type: 'mysql', 
  host: configService.get('DB_HOST'),
  port: configService.get<number>('DB_PORT'),
  username: configService.get('DB_USERNAME'),
  password: configService.get('DB_PASSWORD') ,
  database: configService.get('DB_NAME'),
  entities: [User, Target, EmailTemplate,PageTemplate,Campaign,NewEmailCampaign], 
  synchronize: configService.get<boolean>('DB_SYNCHRONIZE'), 
  
});

export const createDataSource = async (configService: ConfigService): Promise<DataSource> => {
  return new DataSource({
    type: 'mysql',
    host: configService.get('DB_HOST'),
    port: configService.get<number>('DB_PORT'),
    username: configService.get('DB_USERNAME'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_NAME'),
    entities: [User,Target,EmailTemplate,PageTemplate,Campaign,NewEmailCampaign], 
    synchronize: configService.get<boolean>('DB_SYNCHRONIZE'),
  });
};
