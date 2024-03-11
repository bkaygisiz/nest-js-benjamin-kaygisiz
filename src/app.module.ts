import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DownloadModule } from './download/download.module';
import { UploadModule } from './upload/upload.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';

@Module({
  imports: [DownloadModule.register('filesToDownload'), UploadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('upload', 'download');
  }
}
