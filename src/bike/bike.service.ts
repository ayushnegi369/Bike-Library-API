import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bike } from '../entities/bike.entity';
import { CreateBikeDto } from '../dto/create-bike.dto';
import { UpdateBikeDto } from '../dto/update-bike.dto';

@Injectable()
export class BikeService {
  constructor(
    @InjectRepository(Bike)  // Inject the Bike repository
    private bikeRepository: Repository<Bike>,
  ) {}

  findAll(): Promise<Bike[]> {
    return this.bikeRepository.find();
  }

  async findOne(id: string): Promise<Bike> {
    const bike = await this.bikeRepository.findOneBy({ id });
    if (!bike) {
      throw new NotFoundException(`Bike with ID ${id} not found`);
    }
    return bike;
  }

  create(createBikeDto: CreateBikeDto): Promise<Bike> {
    const bike = this.bikeRepository.create(createBikeDto);
    return this.bikeRepository.save(bike);
  }

  async update(id: string, updateBikeDto: UpdateBikeDto): Promise<Bike> {
    await this.bikeRepository.update(id, updateBikeDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.findOne(id); // Check if exists
    await this.bikeRepository.delete(id);
  }
}
