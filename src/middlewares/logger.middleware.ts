import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    req.method === 'POST'
      ? console.log('Uploading from ' + req.ip)
      : console.log('Downloading from ' + req.ip);
    console.log(req.body);
    next();
  }
}
