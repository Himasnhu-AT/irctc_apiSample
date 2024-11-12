import { Injectable } from '@nestjs/common';

@Injectable()
export class BookingService {
  getBookingDetails(bookingId: string) {
    throw new Error('Method not implemented.');
  }
  bookSeat() {
    throw new Error('Method not implemented.');
  }
  // Implement booking logic here
}
