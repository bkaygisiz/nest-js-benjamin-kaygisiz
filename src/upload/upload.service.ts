import { Injectable } from '@nestjs/common';
import { UploadDto } from './dto/upload.dto';

@Injectable()
export class UploadService {
  upload(uploadDto: UploadDto): string {
    return (
      'Created file with data: ' +
      uploadDto.data +
      ' and name: ' +
      uploadDto.filename +
      ' at /home/bkaygisiz/workspace/efrei/nest-js-project-sample/filesToUpload'
    );
  }
}
