import { Module } from '@nestjs/common';
import { DownloadService } from './download.service';

@Module({
  exports: [DownloadService],
  providers: [DownloadService],
})
export class DownloadModule {
  static register(dest: string) {
    return {
      module: DownloadModule,
      providers: [
        {
          provide: 'DESTINATION',
          useValue: dest,
        },
      ],
    };
  }
}
