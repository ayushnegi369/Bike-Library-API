// src/dto/update-bike.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateBikeDto } from './create-bike.dto'; // Correct import from create-bike.dto.ts

export class UpdateBikeDto extends PartialType(CreateBikeDto) {}
