import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TargetsService } from './targets.service';
import { CreateTargetDto } from './dto/target.dto';
import { UpdateTargetDto } from './dto/update-target.dto';

@Controller('targets')
export class TargetsController {
  constructor(private readonly targetService: TargetsService) {}

  @Post('create')
  create(@Body() createTargetDto: CreateTargetDto) {
    return this.targetService.create(createTargetDto);
  }

  @Get()
  findAll() {
    return this.targetService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.targetService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTargetDto: UpdateTargetDto) {
    return this.targetService.update(+id, updateTargetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.targetService.remove(+id);
  }
}
