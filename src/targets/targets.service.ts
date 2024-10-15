import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Target } from './target.entity';
import { CreateTargetDto } from './dto/target.dto';
import { UpdateTargetDto } from './dto/update-target.dto';

@Injectable()
export class TargetsService {
  constructor(
    @InjectRepository(Target)
    private targetRepository: Repository<Target>,
  ) {}

  async create(createTargetDto: CreateTargetDto): Promise<Target> {
    const target = this.targetRepository.create(createTargetDto);
    return this.targetRepository.save(target);
  }

  async findAll(): Promise<Target[]> {
    return this.targetRepository.find();
  }

  async findOne(id: number): Promise<Target> {
    const target = await this.targetRepository.findOne({ where: { id } });
    if (!target) {
      throw new NotFoundException(`Target with ID ${id} not found`);
    }
    return target;
  }

  async update(id: number, updateTargetDto: UpdateTargetDto): Promise<Target> {
    const target = await this.findOne(id);
    Object.assign(target, updateTargetDto);
    return this.targetRepository.save(target);
  }

  async remove(id: number): Promise<void> {
    const result = await this.targetRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Target with ID ${id} not found`);
    }
  }
}
