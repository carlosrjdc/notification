import { Injectable } from '@nestjs/common';
import { message } from './type';
import { HttpService } from './http/http.service';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}
  async getHello(body: message): Promise<string> {
    const sendMensage = [
      process.env.NUMBERPHONEONE,
      process.env.NUMBERPHONETWO,
    ];

    const response = sendMensage.map(async (number) => {
      return await this.httpService.post('/message/sendText/whatsappmf', {
        number,
        options: {
          delay: 1200,
          presence: 'composing',
          linkPreview: false,
        },
        textMessage: {
          text: body.message,
        },
      });
    });

    await Promise.all(response);
    return 'Hello World!';
  }
}
