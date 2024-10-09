import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { BikeService } from './bike.service';
import { CreateBikeDto } from '../dto/create-bike.dto';
import { UpdateBikeDto } from '../dto/update-bike.dto';
import { Bike } from '../entities/bike.entity';

@Controller('bikes')
export class BikeController {
  constructor(private readonly bikeService: BikeService) {}

  @Get()
  findAll(): Promise<Bike[]> {
    return this.bikeService.findAll();
  }

  @Post()
  create(@Body() createBikeDto: CreateBikeDto): Promise<Bike> {
    return this.bikeService.create(createBikeDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateBikeDto: UpdateBikeDto,
  ): Promise<Bike> {
    return this.bikeService.update(id, updateBikeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.bikeService.remove(id);
  }
}
