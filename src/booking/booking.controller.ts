import { Controller, Get, Param, Post } from '@nestjs/common';
import { BookingService } from './booking.service';

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post('book')
  bookSeat() {
    return this.bookingService.bookSeat();
  }

  @Get('details/:bookingId')
  getBookingDetails(@Param('bookingId') bookingId: string) {
    return this.bookingService.getBookingDetails(bookingId);
  }
}
