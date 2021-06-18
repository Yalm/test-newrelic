import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateCatDto } from './create-cat.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Post()
  setHello(@Body() cat: CreateCatDto) {
    return this.appService.store(cat);
  }
}
