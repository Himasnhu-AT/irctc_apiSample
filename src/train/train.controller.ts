import { Controller, Post, Get } from '@nestjs/common';
import { TrainService } from './train.service';

@Controller('train')
export class TrainController {
  constructor(private readonly trainService: TrainService) {}
  @Post('add')
  addTrain() {
    return this.trainService.addTrain();
  }

  @Get('availability')
  getAvailability() {
    return this.trainService.getAvailability();
  }
}
