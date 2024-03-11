import { Controller, Get, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { DownloadService } from './download/download.service';
import { DownloadDto } from './download/dto/download.dto';

@Controller()
export class AppController {
  constructor(
    private appService: AppService,
    private downloadService: DownloadService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('download/')
  downloadFile(@Body() downloadDto: DownloadDto): string {
    return this.downloadService.download(downloadDto.filename);
  }
}
