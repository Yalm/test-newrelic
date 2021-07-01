import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Cat, CatSchema } from "./schemas/cat.schema";
import { ConfigModule } from "@nestjs/config";
import { APP_FILTER } from "@nestjs/core";
import { HttpErrorInterceptor } from "@app/newrelic";
import { AppEvent } from "./app.events";
import { WinstonLogger } from "@app/logger";
import { ClientsModule, Transport } from "@nestjs/microservices";
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot("mongodb://localhost/nest"),
    MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }]),
    ClientsModule.register([
      {
        name: "MATH_SERVICE",
        transport: Transport.TCP,
        options: { port: 4300 },
      },
    ]),
/*     ClientsModule.register([
      {
        name: 'MATH_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'cats_queue',
          queueOptions: {
            durable: false
          },
        },
      },
    ]), */
  ],
  controllers: [AppEvent, AppController],
  providers: [
    WinstonLogger,
    {
      provide: APP_FILTER,
      useClass: HttpErrorInterceptor,
    },
    AppService,
  ],
})
export class AppModule {}
