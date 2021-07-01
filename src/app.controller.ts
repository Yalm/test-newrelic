import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { AppService } from "./app.service";
import { CreateCatDto } from "./create-cat.dto";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject("MATH_SERVICE") private client: ClientProxy
  ) {}

  @Get()
  getHello() {
    return this.client.send('heroe.kill_dragon', {});
  }

  @Post()
  setHello(@Body() cat: CreateCatDto) {
    return this.appService.store(cat);
  }
}
