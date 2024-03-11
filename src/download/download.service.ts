/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class DownloadService {
  private destRepository: string = '/home/bkaygisiz/workspace/efrei/nest-js-project-sample/';

  constructor(@Inject('DESTINATION') private dest: string) {
    this.destRepository += `${dest}/`;
    
  }
  download(filename: string) {
    return this.destRepository + filename;
  }
}
