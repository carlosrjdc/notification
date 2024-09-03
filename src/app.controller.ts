import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { message } from './type';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('notificarwhatsapp')
  getHello(@Body() body: message): Promise<string> {
    return this.appService.getHello(body);
  }
}
