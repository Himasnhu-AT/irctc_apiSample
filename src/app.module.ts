import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { BookingModule } from './booking/booking.module';
import { TrainModule } from './train/train.module';

@Module({
  imports: [PrismaModule, UserModule, BookingModule, TrainModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
