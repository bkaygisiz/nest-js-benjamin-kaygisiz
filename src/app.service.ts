import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getMessage(message: string): string {
    return `Message from client ${message}!`;
  }
  postData(data: any): string {
    return `Data from client ${JSON.stringify(data)}!`;
  }
}
