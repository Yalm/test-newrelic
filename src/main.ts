import { WinstonLogger } from "@app/logger";
import { NotFoundException, ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";
import { AppModule } from "./app.module";
import "newrelic";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: { port: 4300 },

/*     transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'cats_queue',
      queueOptions: {
        durable: false
      },
    }, */
  });

  await app.startAllMicroservicesAsync();

  await app.listen(3300);
}
bootstrap();
