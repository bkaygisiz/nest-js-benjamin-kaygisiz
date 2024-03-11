import { Controller, Post, Body } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadDto } from './dto/upload.dto';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post()
  create(@Body() uploadDto: UploadDto): string {
    return this.uploadService.upload(uploadDto);
  }
}
