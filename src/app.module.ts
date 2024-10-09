import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BikeModule } from './bike/bike.module'; // Only one import here
import { Bike } from './entities/bike.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'bikelibrary.db',
      entities: [Bike],
      synchronize: true,
    }),
    BikeModule, // Only reference once here
  ],
})
export class AppModule {}
