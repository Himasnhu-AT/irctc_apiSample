import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  login(body: { email: string; password: string }) {
    throw new Error('Method not implemented.');
  }
  register(body: { name: string; email: string; password: string }) {
    throw new Error('Method not implemented.');
  }
  // Implement user registration and login logic here
}
