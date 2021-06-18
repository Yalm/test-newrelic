import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema } from './schemas/cat.schema';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://172.20.0.2/nest'),
    MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])
  ],
  controllers: [AppController],
  providers: [   
    AppService
  ],
})
export class AppModule { }
