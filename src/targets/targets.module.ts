import { Module } from '@nestjs/common';
import { TargetsController } from './targets.controller';
import { TargetsService } from './targets.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Target } from './target.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Target])],
  controllers: [TargetsController],
  providers: [TargetsService],
  exports: [TargetsService]

})
export class TargetsModule {}
