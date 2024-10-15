import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { typeOrmConfig } from './config/typeOrm.config';
import { TargetsModule } from './targets/targets.module';
import { EmailTemplatesModule } from './email-templates/email-templates.module';
import { PageTemplatesModule } from './page-templates/page-templates.module';
import { CampaignsModule } from './campaigns/campaigns.module';
import { NewEmailCampaignModule } from './new-email_campaign/new-email_campaign.module';



@Module({
  imports: [   
    ConfigModule.forRoot({
    isGlobal: true, 
    envFilePath: '.env', 
  }),
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: typeOrmConfig, 
  }),
  UserModule,
  TargetsModule,
  EmailTemplatesModule,
  PageTemplatesModule,
  CampaignsModule,
  NewEmailCampaignModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
